using Microsoft.AspNetCore.Mvc;
using SupportApp.Models;

namespace SupportApp.Controllers;


[Route("dashboard/[controller]")]
[ApiController]

public class Dashboard : ControllerBase
{
    // GET
    
    [HttpGet]
    public IActionResult Index()
    {
        return Ok();
    }
}