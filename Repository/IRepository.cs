using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace WebApi.Repository
{
    public interface IRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAll();
        Task<IEnumerable<T>> GetAll(Expression<Func<T, bool>> predicate);
        Task<T> Get(int id);
        Task<T> Get(Expression<Func<T, bool>> predicate);
        Task<T> Post(T entity);
        Task<T> Put(T entity);
        Task<T> Delete(T entity);

    }
}
