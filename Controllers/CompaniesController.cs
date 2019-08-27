using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        private readonly ICompanyService _companyService;

        public CompaniesController(ICompanyService companyService)
        {
            _companyService = companyService;
        }

        // GET: api/Companies
        [HttpGet]
        public async Task<IEnumerable<Company>> GetCompany()
        {
            return await _companyService.GetCompanies();
        }

        // GET: api/Companies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Company>> GetCompany(int id)
        {
            var company = await _companyService.GetCompany(id);

            if (company == null)
            {
                return NotFound();
            }

            return company;
        }

        // PUT: api/Companies/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompany(int id, Company company)
        {
            if (id != company.CompanyId)
            {
                return BadRequest();
            }
            
            try
            {
                await _companyService.PutCompany(company);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!(await CompanyExists(id)))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Companies
        [HttpPost]
        public async Task<ActionResult<Company>> PostCompany(Company company)
        {
            await _companyService.PostCompany(company);

            return CreatedAtAction("GetCompany", new { id = company.CompanyId }, company);
        }

        // DELETE: api/Companies/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Company>> DeleteCompany(int id)
        {
            var company = await _companyService.GetCompany(id);
            if (company == null)
            {
                return NotFound();
            }

            await _companyService.DeleteCompany(company);

            return company;
        }

        private async Task<bool> CompanyExists(int id)
        {
            var companies = await _companyService.GetCompanies(c => c.CompanyId.Equals(id));
            return companies.Count() > 0;
        }
    }
}
