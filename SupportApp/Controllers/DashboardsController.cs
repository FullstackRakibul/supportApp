using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupportApp.Models;
using System.Text.Json.Serialization;
using System.Text.Json;

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

        //var ticket = await _context.Ticket.ToListAsync();
        //var ticket = await _context.Ticket.OrderByDescending(t => t.CreatedAt).ToListAsync();

        var tickets = await _context.Ticket
              .Where(ticket => ticket.Status != TicketStatus.Deleted && ticket.IsEmail == false)
              .OrderByDescending(ticket => ticket.CreatedAt)
              .ToListAsync();

        //var ticket = _context.Ticket.Where(tickets => tickets.Status == TicketStatus.Open).ToList();
        var department = await _context.Department.ToListAsync();
        //var targets = await _context.Target.Where(t=>t.TicketId == ticket);

        var contextData = new
        {
            Tickets = tickets,
            Departments = department
        };
        return Ok(contextData) ;
    }

    //[HttpGet("DashboardDetails")]
    //public  Task<ActionResult<IEnumerable<Ticket>>> GetAllDetails()
    //{

    //    //var ticket = await _context.Ticket.ToListAsync();
    //    var ticket =  _context.Ticket.OrderByDescending(t => t.CreatedAt).ToListAsync();

    //    //var ticket = _context.Ticket.Where(tickets => tickets.Status == TicketStatus.Open).ToList();
    //    var department =  _context.Department.ToListAsync();
    //    var target =  _context.Target.ToListAsync();
    //    var notification =  _context.Notification.ToListAsync();

    //    var contextData = new
    //    {
    //        Tickets = ticket,
    //        Departments = department,
    //        Target = target,
    //        Notification = notification

    //    };
    //    return Ok(contextData);
    //}




    [HttpGet("DashboardDetails")]
    public async Task<ActionResult<IEnumerable<Ticket>>> GetAllDetails()
    {
        try
        {
            var ticket = await _context.Ticket
                .OrderByDescending(t => t.CreatedAt)
                .ToListAsync();

            var department = await _context.Department.ToListAsync();
            var target = await _context.Target.ToListAsync();
            var notification = await _context.Notification.ToListAsync();

            var contextData = new
            {
               // Tickets = ticket,
                //Departments = department,
                //Target = target,
                Notification = notification
            };

            var options = new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,

            };

            var jsonString = JsonSerializer.Serialize(contextData, options);

            return Ok(jsonString);
        }
        catch (Exception ex)
        {
            return BadRequest($"Error: {ex.Message}");
        }
    }


}