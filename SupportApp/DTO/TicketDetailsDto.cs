namespace SupportApp.DTO
{
    public class TicketDetailsDto
    {
        public int TikcetId { get; set; }
        public int ReviewId { get; set; }
        public int TicketTypeId { get; set; }
        public int? AgentId { get; set; }
        public int DepartmentId { get; set; }
        public int UnitId { get; set; }
        public int? ReviewerId { get; set; }
    }
}
