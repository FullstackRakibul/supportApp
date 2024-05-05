using SupportApp.Models;
using SupportApp.Repository.IReposiroty;

namespace SupportApp.Repository
{
    public class CodeSnippetRepository : ICodeSnippetInterface
    {
        private readonly ICodeSnippetInterface _codeSnippetInterface;
        public Task<IEnumerable<CodeSnippet>> GetAllAsync()
        {
            return _codeSnippetInterface.GetAllAsync();
        }
    }
}
