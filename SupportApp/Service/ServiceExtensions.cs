
using SupportApp.Service.NotificationService;

namespace SupportApp.Service.NotificationService;
    public static class ServiceExtensions
    {
        public static IServiceCollection AddTransientServices(this IServiceCollection services)
        {
           
            services.AddTransient<IEmailService, EmailService>();
            services.AddTransient<INotificationService, NotificationService>();
            
            return services;
        }

        public static IServiceCollection AddScopedServices(this IServiceCollection services)
        {
            // Register scoped services here (e.g., shopping cart)
            //services.AddScoped<IDemoService, Demoservice>();
            return services;
        }

        public static IServiceCollection AddSingletonServices(this IServiceCollection services)
        {
            // Register singleton services here (e.g., configuration)
            //services.AddSingleton<IConfiguration>(services.BuildServiceProvider().GetRequiredService<IConfiguration>()); // Access configuration for singleton services
            return services;
        }



    }
}
