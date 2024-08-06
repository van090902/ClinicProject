using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ClinicBackEnd.Migrations
{
    public partial class Patients : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Patients",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Dob = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AddressPrimary = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AddressSecondary = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    DeactivationReason = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patients", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Patients",
                columns: new[] { "Id", "AddressPrimary", "AddressSecondary", "DeactivationReason", "Dob", "Email", "Gender", "IsActive", "Name", "PhoneNumber" },
                values: new object[] { 1, "123 Main St", "Apt 4B", "N/A", new DateTime(1980, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "john.doe@example.com", "Male", true, "John Doe", "123-456-7890" });

            migrationBuilder.InsertData(
                table: "Patients",
                columns: new[] { "Id", "AddressPrimary", "AddressSecondary", "DeactivationReason", "Dob", "Email", "Gender", "IsActive", "Name", "PhoneNumber" },
                values: new object[] { 2, "456 Elm St", "N/A", "N/A", new DateTime(1990, 2, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), "jane.smith@example.com", "Female", true, "Jane Smith", "987-654-3210" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Patients");
        }
    }
}
