using SupportApp.Repository;
using SupportApp.Repository.IReposiroty;

namespace SupportApp.DependencyContainer
{
    public static class DependencyInversion
    {
        public static IServiceCollection RegistrationServices(this IServiceCollection services)
        {

            // repositories 
            services.AddTransient<ICodeSnippetInterface , CodeSnippetRepository>();
            return services;
        }
    }
}
