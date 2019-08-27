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
    public class ContactsController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        // GET: api/Contacts
        [HttpGet]
        public async Task<IEnumerable<Contact>> GetContact()
        {
            return await _contactService.GetContacts();
        }

        // GET: api/Contacts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetContact(int id)
        {
            var contact = await _contactService.GetContact(id);

            if (contact == null)
            {
                return NotFound();
            }

            return contact;
        }

        // PUT: api/Contacts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContact(int id, Contact contact)
        {
            if (id != contact.ContactID)
            {
                return BadRequest();
            }

            try
            {
                await _contactService.PutContact(contact);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!(await ContactExists(id)))
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

        // POST: api/Contacts
        [HttpPost]
        public async Task<ActionResult<Contact>> PostContact(Contact contact)
        {
            await _contactService.PostContact(contact);

            return CreatedAtAction("GetContact", new { id = contact.ContactID }, contact);
        }

        // DELETE: api/Contacts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Contact>> DeleteContact(int id)
        {
            var contact = await _contactService.GetContact(id);
            if (contact == null)
            {
                return NotFound();
            }

            await _contactService.DeleteContact(contact);

            return contact;
        }

        private async Task<bool> ContactExists(int id)
        {
            var contacts = await _contactService.GetContacts(e => e.ContactID.Equals(id));
            return contacts.Count() > 0;
        }
    }
}
