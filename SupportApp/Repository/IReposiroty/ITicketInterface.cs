using SupportApp.DTO;
using SupportApp.Models;
namespace SupportApp.Repository.IReposiroty
{
    public interface ITicketInterface

    {
        Task<string> RaisedIssueWithAttachment(TicketAndTargetDto ticketAndTargetDto);
        Task<string> UpdateRaisedIssueWithAttachment(TicketAndTargetDto ticketAndTargetDto);
    }
}
