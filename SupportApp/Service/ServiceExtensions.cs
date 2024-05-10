
using SupportApp.Repository;
using SupportApp.Repository.IReposiroty;
using SupportApp.Service.Notifications;

namespace SupportApp.Service { 
    public static class ServiceExtensions
    {
        public static IServiceCollection AddTransientServices(this IServiceCollection services)
        {
           
            services.AddTransient<IEmailService, EmailService>();
            services.AddTransient<NotificationService, NotificationService>();
            services.AddTransient<ReviewService, ReviewService>();
            services.AddTransient<GlobalFileUploadService, GlobalFileUploadService>();            
            return services;
        }

        public static IServiceCollection AddScopedServices(this IServiceCollection services)
        {
          // services.AddTransient<ICodeSnippetInterface, CodeSnippetRepository>();
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
