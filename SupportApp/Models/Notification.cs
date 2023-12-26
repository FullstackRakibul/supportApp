namespace SupportApp.Models;


public class Notification
{

    public int Id { get; set; }
    public byte Status { get; set; } = 1;
    public string Message { get; set; } = "A new issue has been raised.";

    public int TargetId { get; set; }   
    public Target Target { get; set; } = new Target();
}