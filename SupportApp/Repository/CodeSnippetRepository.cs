﻿using Microsoft.AspNetCore.Mvc;
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
                var codeData =await _context.CodeSnippet.ToListAsync();
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
    }
}
