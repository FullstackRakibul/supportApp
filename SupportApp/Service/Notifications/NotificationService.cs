using Microsoft.EntityFrameworkCore;
using SupportApp.DTO;
using SupportApp.Models;

namespace SupportApp.Service.Notifications
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
            try {
				var notification = new Notification
				{
					UserId = notificationDto.UserId,
					IsRead = notificationDto.IsRead,
					Message = notificationDto.Message,
					TargetId = notificationDto.TargetId,
					CreatedAt = DateTime.UtcNow.AddHours(6)
				};

				_dbcontext.Notification.Add(notification);
				await _dbcontext.SaveChangesAsync();

				return ("Notification create success...");
			} catch(Exception ex) {
                Console.WriteLine(ex.ToString());
                throw;
            }
        }
    }
}
