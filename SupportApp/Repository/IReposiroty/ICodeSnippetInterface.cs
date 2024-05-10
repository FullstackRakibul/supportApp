using Microsoft.AspNetCore.Mvc;
using SupportApp.Models;
namespace SupportApp.Repository.IReposiroty
{
    public interface ICodeSnippetInterface
    {
        Task<IEnumerable<CodeSnippet>> GetAllAsync();
        Task<CodeSnippet> GetCodeAsync(int id);
    }
}
