using System.Text.Json.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace LCA.Models
{
  public record Chat
  {

    [JsonIgnore]
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; init; }

    [Required(ErrorMessage = "The Body field is required.")]
    public string? Body { get; init; }
    public string? IsSent { get; init; }
    public string? IsRead { get; init; }

    public string? IsDelivered { get; init; }

    [JsonIgnore]
    public DateTime Updated { get; init; }

    [JsonIgnore]
    public DateTime Created { get; init; }
  }
}