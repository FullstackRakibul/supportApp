using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using SupportApp.Models;

namespace SupportApp.Models
{
    public class BaseUser
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        public string Name { get; set; } = "";
        [Required]
        public string EmpCode { get; set; } = "";

        public string? Email { get; set; }

        [Required]
        public string Mobile { get; set; } = "";

        public string? PhoneExtension { get; set; }

        public UserStatus Status { get; set; } = UserStatus.Active;
        public WorkingStatus WorkingStatus { get; set; } = WorkingStatus.Available;
        public string? Username { get; set; }
        public string? Password { get; set; }
        public UserRole UserRole { get; set; } = UserRole.Employee;
    }

    public enum UserStatus
    {
        Active,
        Inactive,
        Suspended
    }

    public enum UserRole { 
        Admin,
        Agent,
        Employee
    }

    public enum WorkingStatus {
        Available,
        Busy,
        Offline,
        WeekendOff
    }
}
