using SupportApp.Models;
namespace SupportApp.Repository.IReposiroty
{
    public interface ICodeSnippetInterface
    {
        IEnumerable<CodeSnippet> GetAllAsync();
    }
}
