using SupportApp.Models;

namespace SupportApp.Service.Pagination
{
    public class PaginationService : IPaginationService
    {
        private readonly SupportAppDbContext _context;

        public PaginationService(SupportAppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Ticket> GetPaginationList(int currentPage, int pageSize)
        {
            int skip = (currentPage - 1) * pageSize;
            return _context.Ticket.OrderByDescending(t => t.CreatedAt)
                                   .Skip(skip)
                                   .Take(pageSize)
                                   .ToList();
        }
    }
}
