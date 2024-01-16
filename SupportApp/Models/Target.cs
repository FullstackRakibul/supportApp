namespace SupportApp.Models;


public class Target
{
    public int Id { get; set; }
    public int TicketId { get; set; }     
    public int AgentId { get; set; }
    public int DepartmentId { get; set; }
    public int UnitId { get; set; }
    public string? Objective { get; set; }

    public Ticket? Ticket { get; set; }



    public ICollection<Department> Department { get; set; } = new List<Department>();
    public ICollection<Unit> Unit { get; set; } = new List<Unit>();
    public ICollection<Notification> Targets { get; set; } = new List<Notification>();

}