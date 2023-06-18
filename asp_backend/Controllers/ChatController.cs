using LCA.Models;
using LCA.Services;
using Microsoft.AspNetCore.Mvc;

namespace LCA.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ChatController : ControllerBase
  {
    private readonly ChatService _chatService;

    public ChatController(ChatService chatService) =>
        _chatService = chatService;

    [HttpGet]
    public async Task<IActionResult> Get(
      [FromQuery] int limit,
      [FromQuery] int page,
      [FromQuery] string id,
      [FromQuery] string userId
      )
    {
      if (id != null)
      {
        var chat = await _chatService.GetAsync(id);
        return Ok(chat);
      }
      var chats = await _chatService.GetMultipleAsync(page, limit, userId);
      return Ok(chats);
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Chat newChat)
    {
      await _chatService.CreateAsync(newChat);
      return CreatedAtAction(nameof(Get), new { id = newChat.Id }, newChat);
    }
  }
}