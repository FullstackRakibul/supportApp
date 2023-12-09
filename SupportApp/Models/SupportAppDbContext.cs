using Microsoft.EntityFrameworkCore;
using SupportApp.Models;

namespace SupportApp.Models
{
    public class SupportAppDbContext : DbContext
    {

        public SupportAppDbContext(DbContextOptions<SupportAppDbContext>options) 
            : base(options) { 
        }

        public DbSet<BaseUser> BaseUser {
            get; set; 
        }

        public DbSet<Ticket> Ticket {
            get; set; 
        }

        public DbSet<Agent> Agent
        {
            get; set;
        }

    }
}
