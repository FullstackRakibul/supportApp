using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SupportApp.Migrations
{
    /// <inheritdoc />
    public partial class tickettableupdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "MessageId",
                table: "Ticket",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "EmailCc",
                table: "Ticket",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FromEmail",
                table: "Ticket",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsEmail",
                table: "Ticket",
                type: "bit",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Ticket_MessageId",
                table: "Ticket",
                column: "MessageId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Ticket_MessageId",
                table: "Ticket");

            migrationBuilder.DropColumn(
                name: "EmailCc",
                table: "Ticket");

            migrationBuilder.DropColumn(
                name: "FromEmail",
                table: "Ticket");

            migrationBuilder.DropColumn(
                name: "IsEmail",
                table: "Ticket");

            migrationBuilder.AlterColumn<string>(
                name: "MessageId",
                table: "Ticket",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");
        }
    }
}
