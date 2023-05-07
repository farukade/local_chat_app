export interface IUser {
  id: any;
  username: string;
  password: string;
  user_type: string;
  photo?: string;
  salt?: string;
  details?: string;
}