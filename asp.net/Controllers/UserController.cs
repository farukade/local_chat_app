using LCA.Models;
using LCA.Services;
using Microsoft.AspNetCore.Mvc;

namespace LCA.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : ControllerBase
  {
    private readonly UserService _userService;

    public UserController(UserService Userservice) =>
        _userService = Userservice;

    [HttpGet]
    public async Task<List<User>> Get() =>
        await _userService.GetAsync();

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] User newUser)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      await _userService.CreateAsync(newUser);
      return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
    }
  }
}