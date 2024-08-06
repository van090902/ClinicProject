using System;

namespace PatientManagementAPI.Models
{
    public class Patient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public DateTime Dob { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string AddressPrimary { get; set; }
        public string AddressSecondary { get; set; }
        public bool IsActive { get; set; }
        public string DeactivationReason { get; set; }
    }
}
