using System.Net.WebSockets;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using LCA.Services;
using System.Text.Json;
using LCA.Models;

namespace LCA.Controllers;
public class WebSocketController : ControllerBase
{
  // private readonly ILogger<WebSocketController> _logger;
  private readonly ChatService _chatService;

  // public WebSocketController(ILogger<WebSocketController> logger)
  // {
  //   _logger = logger;
  // }

  public WebSocketController(ChatService chatService) =>
         _chatService = chatService;

  [HttpGet("/chat")]
  public async Task Get()
  {
    if (HttpContext.WebSockets.IsWebSocketRequest)
    {
      using var webSocket = await HttpContext.WebSockets.AcceptWebSocketAsync();
      await Echo(webSocket);
      Console.WriteLine(webSocket);
    }
    else
    {
      HttpContext.Response.StatusCode = StatusCodes.Status400BadRequest;
    }
  }

  private static async Task Echo(WebSocket webSocket)
  {
    var bufferSize = 1024;
    var buffer = new byte[bufferSize];

    while (webSocket.State == WebSocketState.Open)
    {
      var result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

      if (result.MessageType == WebSocketMessageType.Text)
      {
        var jsonText = Encoding.UTF8.GetString(buffer, 0, result.Count);
        Console.WriteLine(jsonText);
        var jsonObject = JsonSerializer.Deserialize<Chat>(jsonText);
        // await _chatService.CreateAsync(jsonObject);
      }
      else if (result.MessageType == WebSocketMessageType.Close)
      {
        // Handle close message
        await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Connection closed", CancellationToken.None);
      }

    }
  }
}
