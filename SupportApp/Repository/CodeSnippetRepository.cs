using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupportApp.DTO;
using SupportApp.Models;
using SupportApp.Repository.IReposiroty;
using static Org.BouncyCastle.Crypto.Engines.SM2Engine;

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
                return "Error in record creating.";
            }
        }

        public async Task<string> UpdateCodeSnippetAsync(CodeSnippetDto codeSnippetDto)
        {
            try
            {
                var updatedData = await _context.CodeSnippet.FirstOrDefaultAsync(data => data.Id == codeSnippetDto.Id);
                if (updatedData != null)
                {
                    updatedData.Title = codeSnippetDto.Title;
                    updatedData.Language = codeSnippetDto.Language;
                    updatedData.Description = codeSnippetDto.Description;
                    updatedData.SoftwareType = codeSnippetDto.SoftwareType;
                    updatedData.Code = codeSnippetDto.Code;
                    updatedData.UpdatedAt = DateTime.Now;
                    updatedData.IsActive = codeSnippetDto.IsActive;
                    updatedData.IsPublic = codeSnippetDto.IsPublic;


                    _context.CodeSnippet.Update(updatedData);
                    _context.SaveChangesAsync();
                    return "Record has been Updated !";
                }
                else
                {
                    return "Record update failed...";
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return "There is an error on updating. Check Repo";
            }
        }

        public async Task<string> DeleteCodeSnippet(int id)
        {
            try
            {
                var deletedData = await _context.CodeSnippet.FirstOrDefaultAsync(data=>data.Id==id);

                if (deletedData != null && deletedData.IsActive!=false)
                {
                    deletedData.IsActive= false;
                    deletedData.UpdatedAt= DateTime.Now;
                    await _context.SaveChangesAsync();
                    return "Record Deleted Successfully !";
                }
                else
                {
                    return "Record Not found!";
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return ex.ToString();
            }
        }
    }
}
