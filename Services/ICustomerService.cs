using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public interface ICustomerService : IDisposable
    {
        Task<IEnumerable<Customer>> GetCustomers();
        Task<IEnumerable<Customer>> GetCustomers(Expression<Func<Customer, bool>> predicate);
        Task<Customer> GetCustomer(int id);
        Task<Customer> GetCustomer(Expression<Func<Customer, bool>> predicate);
        Task<Customer> PostCustomer(Customer customer);
        Task<Customer> PutCustomer(Customer customer);
        Task<Customer> DeleteCustomer(Customer customer);
    }
}
