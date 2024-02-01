using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SupportApp.Migrations
{
    public partial class AddAgentRole : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Target_TicketId",
                table: "Target");

            migrationBuilder.AddColumn<int>(
                name: "role",
                table: "Agent",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Target_TicketId",
                table: "Target",
                column: "TicketId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Target_TicketId",
                table: "Target");

            migrationBuilder.DropColumn(
                name: "role",
                table: "Agent");

            migrationBuilder.CreateIndex(
                name: "IX_Target_TicketId",
                table: "Target",
                column: "TicketId");
        }
    }
}
