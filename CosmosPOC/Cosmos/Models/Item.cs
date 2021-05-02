using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace CosmosPOC.Cosmos.Models
{
    public class Person : CosmosModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Description { get; set; }

        public List<Child> Children { get; set; }
        public AddressInfo AddressInfo { get; set; }

    }

    public class Child
    {
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
    }

    public class AddressInfo
    {
        public string Country { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
    }

    public class AddChildCommand
    {
        public string PersonId { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
    }
}