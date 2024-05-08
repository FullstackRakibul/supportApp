using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupportApp.DTO;
using SupportApp.Models;
using SupportApp.Repository.IReposiroty;

namespace SupportApp.Repository
{
    public class CodeSnippetRepository : ICodeSnippetInterface
    {
        private readonly SupportAppDbContext _context;

        public  CodeSnippetRepository(SupportAppDbContext supportAppDbContext) {
            _context = supportAppDbContext;
        }
        public  IEnumerable<CodeSnippet> GetAllAsync()
        {
            try
            {
                var codeData = _context.CodeSnippet.ToList();
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
