using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupportApp.Models;

namespace SupportApp.Service
{
    public class TicketTypeService
    {
        private readonly SupportAppDbContext _context;
        public TicketTypeService(SupportAppDbContext supportAppDbContext) {
            _context = supportAppDbContext;
        }
        public async Task CreateTickeType(TicketType ticketType) {
            try {
                Console.WriteLine("This api call success .............");
            }
            catch (Exception exception) {
                Console.WriteLine(exception);
            }
        }

        public async Task<IEnumerable<TicketType>> GetTicketTypeListAsync()
        {

                return await _context.TicketType.FromSqlRaw("select * from TicketType where Status =1").ToListAsync();
        }

    }
}
