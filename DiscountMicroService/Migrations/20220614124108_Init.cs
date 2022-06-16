using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DiscountMicroService.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DiscountCodes",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Amount = table.Column<int>(type: "int", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Used = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiscountCodes", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DiscountCodes");
        }
    }
}
