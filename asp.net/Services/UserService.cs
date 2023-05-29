using LCA.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LCA.Services;

public class UserService
{
  private readonly IMongoCollection<User> _userCollection;

  public UserService(
      IOptions<LCADatabaseSettings> lcaDatabaseSettings)
  {
    var mongoClient = new MongoClient(
        lcaDatabaseSettings.Value.ConnectionString);

    var mongoDatabase = mongoClient.GetDatabase(
        lcaDatabaseSettings.Value.DatabaseName);

    _userCollection = mongoDatabase.GetCollection<User>(
        lcaDatabaseSettings.Value.UserCollectionName);
  }

  public async Task<List<User>> GetAsync() =>
      await _userCollection.Find(_ => true).ToListAsync();

  public async Task<User?> GetAsync(string id) =>
      await _userCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

  public async Task CreateAsync(User newUser)
  {
    await _userCollection.InsertOneAsync(newUser);
  }

  public async Task UpdateAsync(string id, User updatedUser) =>
      await _userCollection.ReplaceOneAsync(x => x.Id == id, updatedUser);

  public async Task RemoveAsync(string id) =>
      await _userCollection.DeleteOneAsync(x => x.Id == id);
}