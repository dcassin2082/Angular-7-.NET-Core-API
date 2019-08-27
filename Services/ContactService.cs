using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using WebApi.Models;
using WebApi.Repository;

namespace WebApi.Services
{
    public class ContactService : ServicesBase, IContactService
    {
        private readonly IRepository<Contact> _contactRepo;

        public ContactService() : base() =>
            _contactRepo = _contactRepo ?? (_contactRepo = new Repository<Contact>(dbContext));

        public async Task<Contact> DeleteContact(Contact contact) =>
            await _contactRepo.Delete(contact);

        public async Task<Contact> GetContact(int id) =>
            await _contactRepo.Get(id);

        public async Task<Contact> GetContact(Expression<Func<Contact, bool>> predicate) =>
            await _contactRepo.Get(predicate);

        public async Task<IEnumerable<Contact>> GetContacts() =>
           await _contactRepo.GetAll();

        public async Task<IEnumerable<Contact>> GetContacts(Expression<Func<Contact, bool>> predicate) =>
            await _contactRepo.GetAll(predicate);

        public async Task<Contact> PostContact(Contact contact) =>
            await _contactRepo.Post(contact);

        public async Task<Contact> PutContact(Contact contact) =>
            await _contactRepo.Put(contact);
    }
}
