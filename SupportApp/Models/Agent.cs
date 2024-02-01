
using SupportApp.Models;

namespace SupportApp.Models
{
    public class Agent
    {

        public int AgentId { get; set; }
        public string Name { get; set; } = String.Empty;
        public string EmpCode { get; set; } = String.Empty;
        public string? Email { get; set; }
        public string? Mobile { get; set; }
        public string? PhoneExtension { get; set; }

        public AgentStatus Status { get; set; } = AgentStatus.Available;

        public string? Username { get; set; }
        public string? Password { get; set; }
        public AgentRole? role { get; set; } = AgentRole.SupportEngineer;
    }

    public enum AgentStatus {
        Available,
        Busy,
        Offline,
        WeekendOff
    }

public enum AgentRole
{
    SupportEngineer,
    DepartmentAdmin,
    SystemManager,
    SystemAdmin
}
}
