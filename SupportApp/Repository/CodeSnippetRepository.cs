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
        public async Task<IEnumerable<CodeSnippet>> GetAllAsync()
        {
            try
            {
                var codeData =await _context.CodeSnippet.Where(code => code.IsActive==true).ToListAsync();
                return codeData;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                throw;
            }
        }

        public async Task<CodeSnippet> GetCodeAsync(int id)
        {
            try
            {
                var responseData = await _context.CodeSnippet.FirstOrDefaultAsync(x => x.Id == id);
                return responseData; 
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error occurred while fetching code data: " + ex.Message);
                throw; 
            }
        }

        public async Task<string> CreateCodeSnippet(CodeSnippetDto codeSnippetDto)
        {
            try
            {
                var createRecord = new CodeSnippet
                {
                    Title = codeSnippetDto.Title,
                    Language = codeSnippetDto.Language,
                    Description = codeSnippetDto.Description,
                    SoftwareType = codeSnippetDto.SoftwareType,
                    Code = codeSnippetDto.Code,
                    Author = codeSnippetDto.Author,
                    CreatedAt = DateTime.Now,
                    IsActive = true,
                    IsPublic = false
                };
                _context.CodeSnippet.Add(createRecord);
                await _context.SaveChangesAsync();
                return "Code Snippet Record created successfully .";

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                throw;
            }
        }

        public async Task<string> DeleteCodeSnippet(int id)
        {
            try
            {
                //var deleteData =  await _context.CodeSnippet.FirstOrDefaultAsync();

                return "Record Deleted Successfully !";

            }catch(Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return ex.ToString();
            }
        }
    }
}
