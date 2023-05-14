import { Socket } from 'socket.io';
import { IChat } from '../types/chat-payload.interface';
import { getChatRoomId } from '../utils/utils';
import { userController } from '../controllers/user.controller';
import { chatController } from '../controllers/chat.controller';
import { constants } from '../controllers/constants';
import { roomController } from '../controllers/room.controller';
const { handleError } = constants;
const { getUserLocal } = userController;
const { saveChat } = chatController;
const { getRoomsLocal } = roomController;

const activeUsers = {};
const activeUsersArr = [];

const chatGateway = {
  sendChat: (socket: Socket) => {
    try {
      socket.on('send-chat', async (payload: IChat) => {
        const { sender_id, recipient_id, room_id } = payload;
        const chatId = getChatRoomId([sender_id, recipient_id]);
        const sender = await getUserLocal(sender_id);

        if (room_id) {
          const res: any = await getRoomsLocal(room_id);
          if (!res) {
            socket.emit(
              sender_id.toString(),
              { succes: false, message: "room not found" }
            );
            return;
          };
          if (res.users) {
            for (const member of res.users) {
              socket.emit(
                member?.user_id.toString(),
                {
                  success: true,
                  ...payload,
                  sender_name: sender ? sender?.username : '',
                }
              );
            };
          }

          await saveChat({
            ...payload,
            is_sent: true,
          }, null, room_id);
          return;
        } else if (sender_id && recipient_id) {
          const data = {
            success: true,
            ...payload,
            sender_username: sender ? sender?.username : '',
          }
          socket.emit(
            sender_id,
            data
          );
          socket.emit(
            recipient_id.toString(),
            data
          );

          await saveChat({
            ...payload,
            room_id,
            is_sent: true,
          }, chatId, null);
          return;
        };
        socket.emit(
          sender_id.toString(),
          { succes: false, message: "an error occurred" }
        );
      });
    } catch (error) {
      handleError(null, error);
    }
  }
}
export default chatGateway;