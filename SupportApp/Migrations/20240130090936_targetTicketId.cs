using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SupportApp.Migrations
{
    public partial class targetTicketId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Target_TicketId",
                table: "Target");

            migrationBuilder.CreateIndex(
                name: "IX_Target_TicketId",
                table: "Target",
                column: "TicketId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Target_TicketId",
                table: "Target");

            migrationBuilder.CreateIndex(
                name: "IX_Target_TicketId",
                table: "Target",
                column: "TicketId",
                unique: true);
        }
    }
}
