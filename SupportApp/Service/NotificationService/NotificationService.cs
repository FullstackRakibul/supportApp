using Microsoft.EntityFrameworkCore;
using SupportApp.DTO;
using SupportApp.Models;

namespace SupportApp.Service.NotificationService
{
    public class NotificationService : INotificationService
    {
        private readonly SupportAppDbContext _dbcontext;
        public NotificationService(SupportAppDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<string> CreateNotification(NotificationDto notificationDto)
        {
            //var notification = new Notification
            //{
            //    UserId = notificationDto.UserId,
            //    IsRead = notificationDto.IsRead,
            //    Message = notificationDto.Message,
            //    TargetId = notificationDto.TargetId, 
            //    CreatedAt = DateTime.UtcNow
            //};

            //_dbcontext.Notification.Add(notification);
            //await _dbcontext.SaveChangesAsync();

            return ("this is api call success ..");
        }
    }
}
