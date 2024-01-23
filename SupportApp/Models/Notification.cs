namespace SupportApp.Models;


public class Notification
{

    public int Id { get; set; }
    public string? UserId { get; set; }
    public bool IsRead { get; set; }
    public string Message { get; set; } = "A new issue has been raised.";
    public int TargetId { get; set; }
    public Target? Target { get; set; }
    public DateTime CreatedAt { get; set; }

}