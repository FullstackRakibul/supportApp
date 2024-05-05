using Microsoft.EntityFrameworkCore;

namespace SupportApp.Models
{
    public class SupportAppDbContext : DbContext
    {

        public SupportAppDbContext(DbContextOptions<SupportAppDbContext> options)
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
        
        public DbSet<Unit>? Unit { get; set; }

        public DbSet<Menu>? Menu { get; set; }

        public DbSet<GlobalFileUpload>? GlobalFileUpload { get; set; }

        public DbSet<CodeSnippet> CodeSnippet { get; set; }

        public DbSet<CodeSnippetAccess> CodeSnippetAccess { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CodeSnippet>()
                .HasIndex(c => c.Language);

            modelBuilder.Entity<CodeSnippetAccess>()
        .HasKey(cs => new { cs.CodeSnippetId, cs.BaseUserId });

            modelBuilder.Entity<CodeSnippetAccess>()
        .HasOne(cs => cs.CodeSnippet)
        .WithMany(cs => cs.CodeSnippetAccess)
        .HasForeignKey(cs => cs.CodeSnippetId);

         modelBuilder.Entity<CodeSnippetAccess>()
                .HasOne(cs => cs.BaseUser)
                .WithMany(cs => cs.CodeSnippetAccess)
                .HasForeignKey(cs => cs.BaseUserId);
        }
    }
}
