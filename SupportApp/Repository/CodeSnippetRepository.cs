using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupportApp.Models;
using SupportApp.Repository.IReposiroty;

namespace SupportApp.Repository
{
    public class CodeSnippetRepository : ICodeSnippetInterface
    {
        private readonly ICodeSnippetInterface _codeSnippetInterface;
        private readonly SupportAppDbContext _context;

        public  CodeSnippetRepository(SupportAppDbContext supportAppDbContext ,ICodeSnippetInterface codeSnippetInterface) {
            _context = supportAppDbContext;
            _codeSnippetInterface = codeSnippetInterface;
        }
        public async  Task<IEnumerable<CodeSnippet>> GetAllAsync()
        {
            try
            {
                var codeData = await _context.CodeSnippet.ToListAsync();
                return codeData;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                throw;
            }
        }
    }
}
