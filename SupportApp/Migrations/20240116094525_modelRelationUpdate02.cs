using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SupportApp.Migrations
{
    public partial class modelRelationUpdate02 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Target_Department_DepartmentId",
                table: "Target");

            migrationBuilder.DropForeignKey(
                name: "FK_Target_Unit_UnitId",
                table: "Target");

            migrationBuilder.DropIndex(
                name: "IX_Target_DepartmentId",
                table: "Target");

            migrationBuilder.DropIndex(
                name: "IX_Target_UnitId",
                table: "Target");

            migrationBuilder.CreateTable(
                name: "DepartmentTarget",
                columns: table => new
                {
                    DepartmentId = table.Column<int>(type: "int", nullable: false),
                    TargetsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepartmentTarget", x => new { x.DepartmentId, x.TargetsId });
                    table.ForeignKey(
                        name: "FK_DepartmentTarget_Department_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Department",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DepartmentTarget_Target_TargetsId",
                        column: x => x.TargetsId,
                        principalTable: "Target",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TargetUnit",
                columns: table => new
                {
                    TargetsId = table.Column<int>(type: "int", nullable: false),
                    UnitId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TargetUnit", x => new { x.TargetsId, x.UnitId });
                    table.ForeignKey(
                        name: "FK_TargetUnit_Target_TargetsId",
                        column: x => x.TargetsId,
                        principalTable: "Target",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TargetUnit_Unit_UnitId",
                        column: x => x.UnitId,
                        principalTable: "Unit",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentTarget_TargetsId",
                table: "DepartmentTarget",
                column: "TargetsId");

            migrationBuilder.CreateIndex(
                name: "IX_TargetUnit_UnitId",
                table: "TargetUnit",
                column: "UnitId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DepartmentTarget");

            migrationBuilder.DropTable(
                name: "TargetUnit");

            migrationBuilder.CreateIndex(
                name: "IX_Target_DepartmentId",
                table: "Target",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Target_UnitId",
                table: "Target",
                column: "UnitId");

            migrationBuilder.AddForeignKey(
                name: "FK_Target_Department_DepartmentId",
                table: "Target",
                column: "DepartmentId",
                principalTable: "Department",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Target_Unit_UnitId",
                table: "Target",
                column: "UnitId",
                principalTable: "Unit",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
