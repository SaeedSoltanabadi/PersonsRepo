using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CosmosPOC.Cosmos;
using CosmosPOC.Cosmos.Models;
using CosmosPOC.Cosmos.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CosmosPOC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonsController : ControllerBase
    {
        private readonly PersonCosmosService _personCosmosService;

        public PersonsController(PersonCosmosService personCosmosService)
        {
            _personCosmosService = personCosmosService;
        }

        [HttpPost]
        public async Task<string> AddItem([FromBody]Person person)
        {
            await _personCosmosService.AddItemAsync(person);
            return person.Id;
        }

        [HttpPut]
        public async Task<string> UpdateItem([FromBody]Person person)
        {
            await _personCosmosService.UpdateItemAsync(person.Id, person);
            return person.Id;
        }
        
        [HttpPut("children")]
        public async Task<string> UpdateItem([FromBody]AddChildCommand addChildCommand)
        {
            var person = await _personCosmosService.GetItemAsync<Person>(addChildCommand.PersonId);
            person.Children.Add(new Child()
            {
                Name = addChildCommand.Name,
                BirthDate = addChildCommand.BirthDate
            });
            await _personCosmosService.UpdateItemAsync(person.Id, person);
            return person.Id;
        }

        [HttpGet]
        public async Task<List<Person>> GetAll()
        {
            return await _personCosmosService.GetItemsAsync<Person>();
        }

        [HttpGet("{id}")]
        public async Task<Person> Get(string id)
        {
            return await _personCosmosService.GetItemAsync<Person>(id);
        }
     
        [HttpDelete("{id}")]
        public async void DeleteItem(string id)
        {
            await _personCosmosService.DeleteItemAsync<Person>(id);
        }
    }
}