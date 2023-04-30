export interface IUser {
  id: string;
  username: string;
  password: string;
  user_type: string;
  photo?: string;
  salt?: string;
  details?: string;
}