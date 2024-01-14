using Microsoft.EntityFrameworkCore;
using SupportApp.Models;

namespace SupportApp.Models
{
    public class SupportAppDbContext : DbContext
    {

        public SupportAppDbContext(DbContextOptions<SupportAppDbContext>options) 
            : base(options) {
    }



        public DbSet<BaseUser>? BaseUser { get; set;}


        public DbSet<Ticket>? Ticket {get; set;}

        public DbSet<Agent>? Agent{get; set;}

        public DbSet<TicketType>? TicketType{ get; set;}
        
        public DbSet<Department>? Department {get; set;}
        
        public DbSet<Notification>? Notification{ get; set;}
        
        public DbSet<Review>? Review{get; set;}
        
        public DbSet<Target>? Target{get; set;}     
        
        public DbSet<SupportApp.Models.Unit>? Unit { get; set; }
    }
}
