using SupportApp.Models;

namespace SupportApp.Service.Pagination
{
    public interface IPaginationService
    {
        IEnumerable<Ticket> GetPaginationList(int currentPage, int pageSize);
    }
}
