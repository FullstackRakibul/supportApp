
using System.ComponentModel.DataAnnotations;

namespace SupportApp.Models
{
    public class BaseUser
    {
        [Key]
        public int UserId { get; set; }
        public string Name { get; set; } = String.Empty;
        public string EmpCode { get; set; } = String.Empty;
        public string? Email { get; set; }
        public string Mobile { get; set; } = String.Empty;
        public string? PhoneExtension { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }

        public UserStatus Status { get; set; } = UserStatus.Active;
        public WorkingStatus WorkingStatus { get; set; } = WorkingStatus.Available;
        public UserRole UserRole { get; set; } = UserRole.Employee;

        public ICollection<CodeSnippetAccess>? CodeSnippetAccess { get; set; }
    }

    public enum UserStatus
    {
        Active,
        Inactive,
        Suspended
    }

    public enum UserRole { 
        Admin,
        SupportManager,
        SupportEngineer,
        Employee,

    }

    public enum WorkingStatus {
        Available,
        Busy,
        Offline,
        WeekendOff
    }
}
