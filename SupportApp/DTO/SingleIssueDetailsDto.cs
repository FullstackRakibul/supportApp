using SupportApp.Models;

namespace SupportApp.DTO
{
    public class SingleIssueDetailsDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;
        public bool? IsEmail { get; set; }
        public string? FromEmail { get; set; }
        public int? UpdatedBy { get; set; }
        public string? CreatedAt { get; set; }
        public string? CreatedBy { get; set; } = string.Empty;
        public TicketStatus Status { get; set; } = TicketStatus.Open;
        public TicketPriority Priority { get; set; } = TicketPriority.Regular;
        public TicketType? TicketType { get; set; }
        public string? AgentName { get; set; }  // Add AgentName property
        public string? PhoneEXT { get; set; }    // Add PhoneEXT property
    }

}
