using SupportApp.Helper;

namespace SupportApp.Service
{
    public interface IEmailService
    {
        Task SendEmailAsync(Mailrequest mailrequest);
    }
}
