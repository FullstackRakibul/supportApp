
using SupportApp.Service.Notifications;

namespace SupportApp.Service { 
    public static class ServiceExtensions
    {
        public static IServiceCollection AddTransientServices(this IServiceCollection services)
        {
           
            services.AddTransient<IEmailService, EmailService>();
            services.AddTransient<NotificationService, NotificationService>();
            services.AddTransient<ReviewService, ReviewService>();
            
            return services;
        }

        public static IServiceCollection AddScopedServices(this IServiceCollection services)
        {
            return services;
        }

        public static IServiceCollection AddSingletonServices(this IServiceCollection services)
        {
            // Register singleton services here (e.g., configuration)
            services.AddSingleton<IConfiguration>(services.BuildServiceProvider().GetRequiredService<IConfiguration>()); // Access configuration for singleton services
            return services;
        }



    }
}
