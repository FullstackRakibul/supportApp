using Microsoft.EntityFrameworkCore;
using SupportApp.Models;

namespace SupportApp.Service
{
    public class TargetService
    {
        private readonly SupportAppDbContext _context;
        public TargetService(SupportAppDbContext context)
        {
            _context = context;
        }
        public void InitialTargetCreate(TicketAndTargetDto ticketAndTargetDto)
        {
            try
            {
                var targetCreate = new Target
                {
                   TicketId = ticketAndTargetDto.TicketId,
                   DepartmentId = ticketAndTargetDto.DepartmentId,
                   UnitId = ticketAndTargetDto.UnitId,
                   Objective = ticketAndTargetDto.Objective,
                };

                _context.Target.Add(targetCreate);
                _context.SaveChanges();

                Console.WriteLine("Target Initialized");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Target Initial service error !!", ex.Message);

            }
        }

        public void AssignSupportEngineer(Target target) {

            // find target record where the ticket id matched , then update that target and only assign AgentId 

            try {
                var selectTarget = _context.Target.FirstOrDefault(t => t.TicketId == target.TicketId);

                if (selectTarget != null)
                {
                    selectTarget.AgentId = target.AgentId;
                }
            }
            catch (Exception ex) {
                Console.WriteLine("Assign upport engineer service error !",ex.Message);
            }
        }
    }
}
