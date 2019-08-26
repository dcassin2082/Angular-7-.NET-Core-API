using System;
using System.Collections.Generic;

namespace WebApi.Models
{
    public partial class Employee
    {
        public int EmployeeID { get; set; }
        public string FullName { get; set; }
        public string EMPCode { get; set; }
        public string Mobile { get; set; }
        public string Position { get; set; }
    }
}
