using LCA.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LCA.Services;

public class ChatService
{
  private readonly IMongoCollection<Chat> _chatCollection;

  public ChatService(
      IOptions<LCADatabaseSettings> lcaDatabaseSettings)
  {
    var mongoClient = new MongoClient(
        lcaDatabaseSettings.Value.ConnectionString);

    var mongoDatabase = mongoClient.GetDatabase(
        lcaDatabaseSettings.Value.DatabaseName);

    _chatCollection = mongoDatabase.GetCollection<Chat>(
        lcaDatabaseSettings.Value.ChatCollectionName);
  }


  public async Task<List<Chat>> GetMultipleAsync(int page, int limit, string userId)
  {
    return await _chatCollection.Find(_ => true).ToListAsync();

    // int skipCount = (page - 1) * limit;

    // List<Chat> result = await _chatCollection.AsQueryable()
    //     .Skip(skipCount)
    //     // .Limit(limit)
    //     .ToList();

    // return result;
  }

  public async Task<Chat?> GetAsync(string id) =>
      await _chatCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

  public async Task CreateAsync(Chat newChat)
  {
    await _chatCollection.InsertOneAsync(newChat);
  }

  public async Task RemoveAsync(string id) =>
      await _chatCollection.DeleteOneAsync(x => x.Id == id);
}