using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SupportApp.Migrations
{
    public partial class modelRelationUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Target_UnitId",
                table: "Target");

            migrationBuilder.DropIndex(
                name: "IX_Notification_TargetId",
                table: "Notification");

            migrationBuilder.CreateIndex(
                name: "IX_Target_UnitId",
                table: "Target",
                column: "UnitId");

            migrationBuilder.CreateIndex(
                name: "IX_Notification_TargetId",
                table: "Notification",
                column: "TargetId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Target_UnitId",
                table: "Target");

            migrationBuilder.DropIndex(
                name: "IX_Notification_TargetId",
                table: "Notification");

            migrationBuilder.CreateIndex(
                name: "IX_Target_UnitId",
                table: "Target",
                column: "UnitId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Notification_TargetId",
                table: "Notification",
                column: "TargetId",
                unique: true);
        }
    }
}
