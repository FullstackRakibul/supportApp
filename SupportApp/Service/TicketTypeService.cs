using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using SupportApp.Models;
using System.Reflection.Emit;

namespace SupportApp.Service
{
    public class TicketTypeService
    {
        private readonly SupportAppDbContext _context;
        public TicketTypeService(SupportAppDbContext supportAppDbContext) {
            _context = supportAppDbContext;
        }
        // ticket type create service ......................
        public async Task CreateTickeType(TicketType ticketType) {
            try
            {
                if (_context.TicketType == null)
                {
                    // Return a BadRequestResult if the entity set is null
                    throw new InvalidOperationException("Entity set 'SupportAppDbContext.TicketType' is null.");
                }
                _context.TicketType.Add(ticketType);
                await _context.SaveChangesAsync();

                Console.WriteLine("Ticket type created successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error creating ticket type: {ex}");
                throw; // Re-throw the exception to propagate it to the caller
            }
        }

        // ticket type list service ......................
        public async Task<IEnumerable<TicketType>> GetTicketTypeListAsync()
        {

                return await _context.TicketType.FromSqlRaw("select * from TicketType where Status =1").ToListAsync();
        }


        // delete ticket type from the list 

        public async Task<(TicketType, string)> DeleteTicketTypeListAsync(int ticketTypeId)
        {
            try
            {
                var ticketTypeToUpdate = await _context.TicketType.FindAsync(ticketTypeId);

                if (ticketTypeToUpdate != null)
                {
                    ticketTypeToUpdate.Status = 0;
                    await _context.SaveChangesAsync();
                }

                return (ticketTypeToUpdate, "Ticket Type Deleted successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error deleting ticket type: {ex}");
                throw;
            }
        }


    }
}
