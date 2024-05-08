using SupportApp.Models;
namespace SupportApp.Repository.IReposiroty
{
    public interface ICodeSnippetInterface
    {
        Task<IEnumerable<CodeSnippet>> GetAllAsync();
    }
}
