using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SupportApp.Migrations
{
    public partial class departmenttableupdate2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Target_DepartmentId",
                table: "Target");

            migrationBuilder.CreateIndex(
                name: "IX_Target_DepartmentId",
                table: "Target",
                column: "DepartmentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Target_DepartmentId",
                table: "Target");

            migrationBuilder.CreateIndex(
                name: "IX_Target_DepartmentId",
                table: "Target",
                column: "DepartmentId",
                unique: true);
        }
    }
}
