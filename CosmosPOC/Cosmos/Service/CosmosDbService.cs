using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using CosmosPOC.Cosmos.Models;
using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Cosmos.Linq;

namespace CosmosPOC.Cosmos.Service
{
    public abstract class CosmosDbService
    {
        private readonly Container _container;

        protected CosmosDbService(Container container)
        {
            this._container = container;
        }

        public async Task AddItemAsync<T>(T item) where T : CosmosModel
        {
            await this._container.CreateItemAsync<T>(item, new PartitionKey(item.Id));
        }

        public async Task DeleteItemAsync<T>(string id)
        {
            await this._container.DeleteItemAsync<T>(id, new PartitionKey(id));
        }

        public async Task<T> GetItemAsync<T>(string id)
        {
            try
            {
                var response = await this._container.ReadItemAsync<T>(id, new PartitionKey(id));
                return response.Resource;
            }
            catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
            {
                return default;
            }

        }

        public async Task<List<T>> GetItemAsyncUsingLinq<T>(Expression<Func<T, bool>> predicate)
        {
            try
            {
                using var setIterator = _container.GetItemLinqQueryable<T>().Where(predicate).ToFeedIterator();
                var results = new List<T>();
                while (setIterator.HasMoreResults)
                {
                    var response = await setIterator.ReadNextAsync();

                    results.AddRange(response.ToList());
                }

                return results;
            }
            catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
            {
                return default;
            }
        }

        public async Task<List<T>> GetItemsAsync<T>()
        {
            var queryString = $"select * from {typeof(T).Name}";
            var query = this._container.GetItemQueryIterator<T>(new QueryDefinition(queryString));
            var results = new List<T>();
            while (query.HasMoreResults)
            {
                var response = await query.ReadNextAsync();

                results.AddRange(response.ToList());
            }

            return results;
        }

        public async Task UpdateItemAsync<T>(string id, T item)
        {
            await this._container.UpsertItemAsync<T>(item, new PartitionKey(id));
        }
    }
}