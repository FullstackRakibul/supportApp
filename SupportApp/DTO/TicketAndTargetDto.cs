using SupportApp.Models;

namespace SupportApp.DTO
{
    public class TicketAndTargetDto
    {
        public int Id { get; set; }
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
        public TicketType? TicketType { get; set; }
        public Target? Target { get; set; }


        // Add other properties for Ticket
        public int TicketId { get; set; }
        public int? AgentId { get; set; }
        public int DepartmentId { get; set; }
        public int UnitId { get; set; }
        public string? Objective { get; set; }

        public Ticket? Ticket { get; set; }

        public ICollection<Department> Department { get; set; } = new List<Department>();
        public ICollection<Unit> Unit { get; set; } = new List<Unit>();
        public ICollection<Notification> Notification { get; set; } = new List<Notification>();
    }
}
