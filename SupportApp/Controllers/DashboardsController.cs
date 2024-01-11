using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupportApp.Models;

namespace SupportApp.Controllers;


[Route("dashboard/[controller]")]
[ApiController]

public class DashboardsController : ControllerBase
{
    private readonly SupportAppDbContext _context;

    public DashboardsController(SupportAppDbContext context)
    {
        _context = context;
    }


    // GET

    [HttpGet("IssueBox")]
    //public IActionResult Index()
    public async Task<ActionResult<IEnumerable<Ticket>>> Index()
    {

        var ticket = await _context.Ticket.ToListAsync();

        //var ticket = _context.Ticket.Where(tickets => tickets.Status == TicketStatus.Open).ToList();
        var department = await _context.Department.ToListAsync();

        var contextData = new
        {
            Tickets = ticket,
            Departments = department
        };


        return Ok(contextData) ;
    }
}