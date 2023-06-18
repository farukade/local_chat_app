using System.Text.Json.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace LCA.Models
{
  public record User
  {

    [JsonIgnore]
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; init; }

    [Required(ErrorMessage = "The USERNAME field is required.")]
    [MinLength(2, ErrorMessage = "The USERNAME field must have a minimum length of 2 characters.")]
    public string? Username { get; init; }
    public string? Description { get; init; }

    [Required(ErrorMessage = "The PASSWORD field is required.")]
    [MinLength(8, ErrorMessage = "The PASSWORD field must have a minimum length of 8 characters.")]
    public string? Password { get; init; }

    public string? Photo { get; init; }

    [JsonIgnore]
    public DateTime Updated { get; init; }

    [JsonIgnore]
    public DateTime Created { get; init; }
  }
}