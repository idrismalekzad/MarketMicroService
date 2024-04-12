﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BasketMicroService.Migrations
{
    /// <inheritdoc />
    public partial class AddDiscountIDToBasket : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "DiscountId",
                table: "Baskets",
                type: "uniqueidentifier",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DiscountId",
                table: "Baskets");
        }
    }
}
