using Microsoft.Azure.Cosmos;
using Microsoft.Extensions.Configuration;

namespace CosmosPOC.Cosmos.Service
{
    public class LeadCosmosService : CosmosDbService
    {
        private const string LeadContainerName = "Lead";
        public LeadCosmosService(CosmosClient cosmosClient, IConfiguration configuration) 
            : base(GetContainer(cosmosClient, configuration))
        {
        }

        private static Container GetContainer(CosmosClient cosmosClient, IConfiguration configuration)
        {
            var databaseName = configuration.GetSection("CosmosDb:DatabaseName").Value;
            return cosmosClient.GetContainer(databaseName, LeadContainerName);
        }
    }
}