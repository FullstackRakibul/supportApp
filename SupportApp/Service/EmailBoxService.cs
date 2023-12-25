using MailKit.Net.Pop3;
using MimeKit;
using SupportApp.Models;
using System.Text.RegularExpressions;

namespace SupportApp.Service;

public class EmailBoxService
{
    private readonly SupportAppDbContext _dbContext;
    //private readonly EmailSettings _emailSettings;
    public EmailBoxService(SupportAppDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    public class EmailDetails
    {
        public string MessageId { get; set; } = "";
        public string Subject { get; set; } = "";
        public string Body { get; set; } = "";
        public string From { get; set; } = "";
        public string To { get; set; } = "";
        public string Cc { get; set; } = "";
        public string Bcc { get; set; } = "";
        public List<string>? Attachments { get; set; }
        public List<KeyValuePair<string, string>> Headers { get; set; }
    }

    private List<string> GetAttachmentFilenames(MimeMessage message)
    {
        var attachmentFileNames = new List<string>();
        foreach (var attachment in message.Attachments)
        {
            var filename = attachment.ContentDisposition?.FileName ?? "Attachment";
            attachmentFileNames.Add(filename);
        }

        return attachmentFileNames;
    }
    private List<KeyValuePair<string, string>> GetHeaders(MimeMessage message)
    {
        var headers = new List<KeyValuePair<string, string>>();

        foreach (var header in message.Headers)
        {
            headers.Add(new KeyValuePair<string, string>(header.Field, header.Value));
        }

        return headers;
    }
    
    // Helper method to extract headers
    private static List<KeyValuePair<string, string>> ExtractHeaders(MimeMessage mimeMessage)
    {
        // Logic to extract headers
        var headers = mimeMessage.Headers.Select(header => new KeyValuePair<string, string>(header.Field, header.Value)).ToList();
        return headers;
    }

    public List<EmailDetails> GetEmailDetails()
    {
        var emailDetailsList = new List<EmailDetails>();
        try
        {
            using var client = new Pop3Client();
            client.Connect("mail.dhakawestern.com",995,true);
            client.Authenticate("support@dhakawestern.com","support@dhakawestern.com");

            for (int i = 0; i < client.Count; i++)
            {
                var message = client.GetMessage(i);
                var emailDetails = new EmailDetails
                {
                    MessageId = message.MessageId.ToString(),
                    Headers = GetHeaders(message),
                    //Headers = ExtractHeaders(message),
                   // From = message.From.ToString(),
                    From = Regex.Match(message.From.ToString(), @"<([^>]+)>").Groups[1].Value,
                    Subject = message.Subject,
                    Body = !string.IsNullOrEmpty(message.TextBody)? message.TextBody: message.HtmlBody,
                    To = message.To.ToString(),
                    Cc = message.Cc.ToString(),
                    Bcc = message.Bcc.ToString(),
                    Attachments = GetAttachmentFilenames(message)
                };
                emailDetailsList.Add(emailDetails);
            }
            client.Disconnect(true);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }

        return emailDetailsList;
    }
}