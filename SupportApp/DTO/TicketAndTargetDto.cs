using SupportApp.Models;

namespace SupportApp.DTO
{
    public class TicketAndTargetDto
    {
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;
        public int? UserId { get; set; }
        public string? Attachment { get; set; }
		public bool? IsEmail { get; set; }
        public string? FromEmail { get; set; }
        public string? EmailCc { get; set; }
        public int? UpdatedBy { get; set; }
        public string? CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public string? UpdatedAt { get; set; }
        public TicketStatus Status { get; set; } = TicketStatus.Open;
        public TicketPriority Priority { get; set; } = TicketPriority.Regular;
        public int TicketTypeId { get; set; }

        // Add other properties for Ticket
        public int TicketId { get; set; }
        public int? AgentId { get; set; }
        public int DepartmentId { get; set; }
        public int UnitId { get; set; }
        public string? Objective { get; set; }

        // add proparties for Notification 
		public bool IsRead { get; set; }
		public string Message { get; set; } = "A new issue has been raised.";
		public int TargetId { get; set; }


	}
}
