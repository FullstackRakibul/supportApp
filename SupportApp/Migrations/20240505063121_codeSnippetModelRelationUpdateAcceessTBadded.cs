using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SupportApp.Migrations
{
    public partial class codeSnippetModelRelationUpdateAcceessTBadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_CodeSnippets",
                table: "CodeSnippets");

            migrationBuilder.RenameTable(
                name: "CodeSnippets",
                newName: "CodeSnippet");

            migrationBuilder.RenameIndex(
                name: "IX_CodeSnippets_Language",
                table: "CodeSnippet",
                newName: "IX_CodeSnippet_Language");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CodeSnippet",
                table: "CodeSnippet",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "CodeSnippetAccess",
                columns: table => new
                {
                    CodeSnippetId = table.Column<int>(type: "int", nullable: false),
                    BaseUserId = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CodeSnippetAccess", x => new { x.CodeSnippetId, x.BaseUserId });
                    table.ForeignKey(
                        name: "FK_CodeSnippetAccess_BaseUser_BaseUserId",
                        column: x => x.BaseUserId,
                        principalTable: "BaseUser",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CodeSnippetAccess_CodeSnippet_CodeSnippetId",
                        column: x => x.CodeSnippetId,
                        principalTable: "CodeSnippet",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CodeSnippetAccess_BaseUserId",
                table: "CodeSnippetAccess",
                column: "BaseUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CodeSnippetAccess");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CodeSnippet",
                table: "CodeSnippet");

            migrationBuilder.RenameTable(
                name: "CodeSnippet",
                newName: "CodeSnippets");

            migrationBuilder.RenameIndex(
                name: "IX_CodeSnippet_Language",
                table: "CodeSnippets",
                newName: "IX_CodeSnippets_Language");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CodeSnippets",
                table: "CodeSnippets",
                column: "Id");
        }
    }
}
