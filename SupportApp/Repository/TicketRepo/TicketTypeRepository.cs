
using SupportApp.Models;

namespace SupportApp.Repository.Ticket
{
    public class TicketTypeRepository : ITicketTypeRepository
    {
        private readonly ITicketTypeRepository _ticketTypeRepository;


        public Task CreateTicketTypeAsync(TicketType ticketType)
        {
            return _ticketTypeRepository.CreateTicketTypeAsync(ticketType);
        }
    }
}
