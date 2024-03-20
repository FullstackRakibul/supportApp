namespace SupportApp.DTO
{
    public class NotificationDto
    {
        public string? UserId { get; set; }
        public bool IsRead { get; set; }
        public string Message { get; set; } = "A new issue has been raised.";
        public int TargetId { get; set; }
    }
}
