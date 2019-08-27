using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using WebApi.Models;
using WebApi.Repository;

namespace WebApi.Services
{
    public class CustomerService : ServicesBase, ICustomerService
    {
        private readonly IRepository<Customer> _customerRepo;

        public CustomerService() : base() =>
            _customerRepo = _customerRepo ?? (_customerRepo = new Repository<Customer>(dbContext));

        public async Task<Customer> DeleteCustomer(Customer customer) =>
            await _customerRepo.Delete(customer);

        public async Task<Customer> GetCustomer(int id) =>
            await _customerRepo.Get(id);

        public async Task<Customer> GetCustomer(Expression<Func<Customer, bool>> predicate) =>
            await _customerRepo.Get(predicate);

        public async Task<IEnumerable<Customer>> GetCustomers() =>
            await _customerRepo.GetAll();

        public async Task<IEnumerable<Customer>> GetCustomers(Expression<Func<Customer, bool>> predicate) =>
            await _customerRepo.GetAll(predicate);

        public async Task<Customer> PostCustomer(Customer customer) =>
            await _customerRepo.Post(customer);

        public async Task<Customer> PutCustomer(Customer customer) =>
            await _customerRepo.Put(customer);
    }
}
