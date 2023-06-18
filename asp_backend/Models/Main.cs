namespace LCA.Models;

public class LCADatabaseSettings
{
  public string ConnectionString { get; set; } = null!;
  public string DatabaseName { get; set; } = null!;
  public string UserCollectionName { get; set; } = null!;
  public string ChatCollectionName { get; set; } = null!;
}