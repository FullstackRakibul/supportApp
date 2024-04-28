using Microsoft.AspNetCore.SignalR;

namespace SupportApp.SignalR
{
	public class ReviewHub:Hub
	{
		public async Task SendMessage(string user, string message)
		{
			await Clients.All.SendAsync("ReceiveMessage", user, message);
		}
	}
}
