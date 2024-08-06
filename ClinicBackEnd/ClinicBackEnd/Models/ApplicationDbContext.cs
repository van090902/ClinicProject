using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace PatientManagementAPI.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Patient> Patients { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Patient>().HasData(
                new Patient
                {
                    Id = 01,
                    Name = "John Doe",
                    Dob = new DateTime(1980, 1, 1),
                    PhoneNumber = "123-456-7890",
                    Email = "john.doe@example.com",
                    AddressPrimary = "123 Main St",
                    AddressSecondary = "Apt 4B",
                    IsActive = true,
                    Gender = "Male",
                    DeactivationReason = "N/A" // Hoặc giá trị khác nếu cần
                },
                new Patient
                {
                    Id = 02,
                    Name = "Jane Smith",
                    Dob = new DateTime(1990, 2, 2),
                    PhoneNumber = "987-654-3210",
                    Email = "jane.smith@example.com",
                    AddressPrimary = "456 Elm St",
                    AddressSecondary = "N/A",
                    IsActive = true,
                    Gender = "Female",
                    DeactivationReason = "N/A" // Hoặc giá trị khác nếu cần
                }
            );
        }


    }


}
