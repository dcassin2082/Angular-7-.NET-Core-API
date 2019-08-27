using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using WebApi.Models;
using WebApi.Repository;

namespace WebApi.Services
{
    public class CompanyService:ServicesBase, ICompanyService
    {
        private readonly IRepository<Company> _companyRepo;

        public CompanyService() : base() =>
            _companyRepo = _companyRepo ?? (_companyRepo = new Repository<Company>(dbContext));

        public async Task<Company> DeleteCompany(Company company) =>
            await _companyRepo.Delete(company);

        public async Task<Company> GetCompany(int id) =>
            await _companyRepo.Get(id);

        public async Task<Company> GetCompany(Expression<Func<Company, bool>> predicate) =>
            await _companyRepo.Get(predicate);

        public async Task<IEnumerable<Company>> GetCompanies() =>
           await _companyRepo.GetAll();

        public async Task<IEnumerable<Company>> GetCompanies(Expression<Func<Company, bool>> predicate) =>
            await _companyRepo.GetAll(predicate);

        public async Task<Company> PostCompany(Company company) =>
            await _companyRepo.Post(company);

        public async Task<Company> PutCompany(Company company) =>
            await _companyRepo.Put(company);
    }
}
