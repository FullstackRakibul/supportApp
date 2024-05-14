using SupportApp.DTO;
using SupportApp.Models;

namespace SupportApp.Service
{
    public class ReviewService
    {
        private readonly SupportAppDbContext _context;
        public ReviewService(SupportAppDbContext supportAppDbContext) {
            _context = supportAppDbContext;
        }

        public async Task createReview(ReviewDto reviewDto)
        {
            try {
                var reviewCreate = new Review { 
                
                    TicketId = reviewDto.TicketId,
                    ReviewerId = reviewDto.ReviewerId,
                    ReviewNote = reviewDto.ReviewNote,
                    CreatedAt = DateTime.UtcNow.AddHours(6),
                    Status  = true,
                };
                _context.Review.Add(reviewCreate);
                await _context.SaveChangesAsync();
                
            
            } catch (Exception e) { Console.WriteLine(e.ToString(), "Error in Review Sevice..."); }

        }
    }
}
