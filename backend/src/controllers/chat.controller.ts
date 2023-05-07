import { Chat } from '../models/chat.model';
import { IChat } from '../types/chat-payload.interface';
import { constants } from './constants';
import { userController } from './user.controller';
const { getUserLocal } = userController;
const { handleError } = constants;

export const chatController = {
  saveChat: async (data: IChat, chat_id: string, room_id: number | null) => {
    try {
      let recipient;
      if (data.recipient_id) {
        recipient = await getUserLocal(data.recipient_id);
      };

      const sender = await getUserLocal(data.sender_id);

      if (!sender && !recipient)
        return { success: false, message: "'sender | recipient' not found" };

      let room = room_id ? true : null;

      const chat = new Chat({
        ...data,
        chat_id,
        room,
        is_read: room ? true : false,
        is_delivered: room ? true : false,
      });
      let savedData = await chat.save();

      return { success: true, message: savedData };

    } catch (error) {
      handleError(null, error);
    }
  }
}