namespace SupportApp.Models;


public class Review
{

    public int Id { get; set; }
    public int TicketId { get; set; }
    public int ReviewUserId { get; set; }
    public int ReviewAgentId { get; set; }
    public string? ReviewNote { get; set; }
    
    public bool Status { get; set; } = true;

    public Ticket Ticket { get; set; } = new Ticket();

}