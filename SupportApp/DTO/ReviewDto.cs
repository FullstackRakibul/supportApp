namespace SupportApp.DTO
{
    public class ReviewDto
    {
        public int TicketId { get; set; }
        public int? ReviewerId { get; set; }
        public string ReviewNote { get; set; } = String.Empty;
    }
}
