using System;
using WebApi.Models;

namespace WebApi.Services
{
    public abstract class ServicesBase : IDisposable
    {
        protected readonly EmployeeDbContext dbContext;

        public ServicesBase()
        {
            dbContext = new EmployeeDbContext();
        }

        public void Dispose()
        {
            dbContext.Dispose();
        }
    }
}
