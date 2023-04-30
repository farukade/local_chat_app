export interface IDatabase {
  host: string;
  user: string;
  password: string;
  database: string;
  dialect?: string;
}