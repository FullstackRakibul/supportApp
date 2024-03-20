using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupportApp.DTO;
using SupportApp.Models;
using SupportApp.Service.Notifications;

namespace SupportApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController : ControllerBase
    {
        //private readonly SupportAppDbContext _context;
        private readonly INotificationService _notificationService;
        public NotificationsController(NotificationService notificationService)
        {
           _notificationService = notificationService;
        }
        [HttpPost("createNotification")]
        public async Task<IActionResult> CreateNotification([FromBody] NotificationDto notificationDto)
        {
            try {
				if (!ModelState.IsValid)
				{
					return BadRequest(ModelState); // Return bad request with validation errors
				}
				await _notificationService.CreateNotification(notificationDto);
				return Ok("this is ok controller");
			} catch (Exception ex) {
                Console.WriteLine(ex);
                throw;
            }
        }
    }
}



//// GET: api/Notifications
//[HttpGet]
//public async Task<ActionResult<IEnumerable<Notification>>> GetNotification()
//{
//  if (_context.Notification == null)
//  {
//      return NotFound();
//  }
//    return await _context.Notification.ToListAsync();
//}

//// GET: api/Notifications/5
//[HttpGet("{id}")]
//public async Task<ActionResult<Notification>> GetNotification(int id)
//{
//  if (_context.Notification == null)
//  {
//      return NotFound();
//  }
//    var notification = await _context.Notification.FindAsync(id);

//    if (notification == null)
//    {
//        return NotFound();
//    }

//    return notification;
//}

//// PUT: api/Notifications/5
//// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
//[HttpPut("{id}")]
//public async Task<IActionResult> PutNotification(int id, Notification notification)
//{
//    if (id != notification.Id)
//    {
//        return BadRequest();
//    }

//    _context.Entry(notification).State = EntityState.Modified;

//    try
//    {
//        await _context.SaveChangesAsync();
//    }
//    catch (DbUpdateConcurrencyException)
//    {
//        if (!NotificationExists(id))
//        {
//            return NotFound();
//        }
//        else
//        {
//            throw;
//        }
//    }

//    return NoContent();
//}

//// POST: api/Notifications
//// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
//[HttpPost]
//public async Task<ActionResult<Notification>> PostNotification(Notification notification)
//{
//  if (_context.Notification == null)
//  {
//      return Problem("Entity set 'SupportAppDbContext.Notification'  is null.");
//  }
//    _context.Notification.Add(notification);
//    await _context.SaveChangesAsync();

//    return CreatedAtAction("GetNotification", new { id = notification.Id }, notification);
//}

//// DELETE: api/Notifications/5
//[HttpDelete("{id}")]
//public async Task<IActionResult> DeleteNotification(int id)
//{
//    if (_context.Notification == null)
//    {
//        return NotFound();
//    }
//    var notification = await _context.Notification.FindAsync(id);
//    if (notification == null)
//    {
//        return NotFound();
//    }

//    _context.Notification.Remove(notification);
//    await _context.SaveChangesAsync();

//    return NoContent();
//}

//private bool NotificationExists(int id)
//{
//    return (_context.Notification?.Any(e => e.Id == id)).GetValueOrDefault();
//}