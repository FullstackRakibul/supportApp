namespace SupportApp.Models;


public class Target
{
    public int Id { get; set; }
    public int TicketId { get; set; }     
    public int AgentId { get; set; }
    public int DepartmentId { get; set; }
    public string? Objective { get; set; }

    public Ticket Ticket { get; set; } = new Ticket();
    public Department Department { get; set; } = new Department();


}