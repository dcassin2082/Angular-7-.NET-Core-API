using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public interface IEmployeeService : IDisposable
    {
        Task<IEnumerable<Employee>> GetEmployees();
        Task<IEnumerable<Employee>> GetEmployees(Expression<Func<Employee, bool>> predicate);
        Task<Employee> GetEmployee(int id);
        Task<Employee> GetEmployee(Expression<Func<Employee, bool>> predicate);
        Task<Employee> PostEmployee(Employee employee);
        Task<Employee> PutEmployee(Employee employee);
        Task<Employee> DeleteEmployee(Employee employee);
    }
}
