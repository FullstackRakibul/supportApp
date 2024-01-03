using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders.Physical;
using Org.BouncyCastle.Bcpg.Sig;
using SupportApp.Models;

namespace SupportApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseUsersController : ControllerBase
    {
        private readonly SupportAppDbContext _context;

        public BaseUsersController(SupportAppDbContext context)
        {
            _context = context;
        }

        // GET: api/BaseUser
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BaseUser>>> GetBaseUser()
        {
          if (_context.BaseUser == null)
          {
              return NotFound();
          }
            return await _context.BaseUser.ToListAsync();
        }
        // GET: api/BaseUser/5
        [HttpGet("{id}")]
        //public async Task<ActionResult<BaseUser>> GetBaseUser( int id)
        public async Task<ActionResult<BaseUser>> GetBaseUser( int id)
        {
          if (_context.BaseUser == null)
          {
              return Problem("BaseUser Table is Empty!");
          }
          try
          {
              var baseUser = await _context.BaseUser.FindAsync(id);
              //var baseUser = _context.BaseUser.Find(id);
              if (baseUser == null)
              {
                  return NotFound("User doesn't exit !!");
              }
              return baseUser;
          }
          catch (Exception ex)
          {
              Console.WriteLine(ex);
              return BadRequest("Something wrong with the request");
          }
        }

        // PUT: api/BaseUser/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBaseUser(int id, BaseUser baseUser)
        {
            if (id != baseUser.UserId)
            {
                return BadRequest();
            }

            _context.Entry(baseUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                return Ok("User Updated successfully");
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BaseUserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }

        // POST: api/BaseUser
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BaseUser>> PostBaseUser(BaseUser baseUser)
        {
          if (_context.BaseUser == null)
          {
              return Problem("Entity set 'SupportAppDbContext.BaseUser'  is null.");
          }
            _context.BaseUser.Add(baseUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBaseUser", new { id = baseUser.UserId }, baseUser);
        }

        // DELETE: api/BaseUser/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBaseUser(int id)
        {
            if (_context.BaseUser == null)
            {
                return NotFound();
            }
            var baseUser = await _context.BaseUser.FindAsync(id);
            if (baseUser == null)
            {
                return NotFound();
            }

            _context.BaseUser.Remove(baseUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BaseUserExists(int id)
        {
            return (_context.BaseUser?.Any(e => e.UserId == id)).GetValueOrDefault();
        }
    }
}
