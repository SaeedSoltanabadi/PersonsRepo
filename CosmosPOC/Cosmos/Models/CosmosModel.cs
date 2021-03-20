using Newtonsoft.Json;

namespace CosmosPOC.Cosmos.Models
{
    public class CosmosModel
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }
    }
}