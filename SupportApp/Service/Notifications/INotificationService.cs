using Microsoft.CodeAnalysis.CSharp.Syntax;
using SupportApp.DTO;
using SupportApp.Models;

namespace SupportApp.Service.Notifications
{
    public interface INotificationService
    {
       // Task<IEnumerable<Notification>> GetNotificationsByUserId(string userId);
       // Task<Notification> GetNotificationById(int notificationId);
        Task<string> CreateNotification(NotificationDto NotificationDto);
      //  Task MarkNotificationAsRead(int notificationId);
       // Task DeleteNotification(int notificationId);
    }
}