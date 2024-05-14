
namespace SupportApp.Models
{
    public class CodeSnippetAccess
    {
        public int Id { get; set; }
        public int CodeSnippetId { get; set; }
        public CodeSnippet CodeSnippet { get; set; }

        public int BaseUserId { get; set; }

        public BaseUser BaseUser { get; set; }
    }
}
