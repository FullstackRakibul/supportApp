using Microsoft.AspNetCore.Mvc;
using SupportApp.DTO;
using SupportApp.Models;
namespace SupportApp.Repository.IReposiroty
{
    public interface ICodeSnippetInterface
    {
        Task<IEnumerable<CodeSnippet>> GetAllAsync();
        Task<CodeSnippet> GetCodeAsync(int id);
        Task<string> CreateCodeSnippet(CodeSnippetDto codeSnippetDto);
        Task<string> UpdateCodeSnippetAsync(CodeSnippetDto codeSnippetDto);
        Task<string> DeleteCodeSnippet(int id);
    }
}
