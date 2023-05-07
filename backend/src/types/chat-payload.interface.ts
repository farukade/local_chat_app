export interface IChat {
  id: string;
  sender_id: string;
  recipient_id: string;
  body: string;
  room_id?: number;
  is_sent?: boolean;
  is_support?: boolean;
  created_at?: Date,
  updated_at?: Date,
  deleted_at?: Date,
  deleted_by?: string,
  is_delivered?: boolean,
  is_read?: boolean,
}