import { Socket } from 'socket.io';
import { IChat } from '../types/chat-payload.interface';
import { getChatRoomId } from '../utils/utils';
import { userController } from '../controllers/user.controller';
import { chatController } from '../controllers/chat.controller';
import { constants } from '../controllers/constants';
const { handleError } = constants;
const { getUserLocal } = userController;
const { saveChat } = chatController;

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
          // const res = await getRooms({ room_id: room_id.toString() });
          // if (!res.success) {
          //   this.wss.emit(
          //     sender_id.toString(),
          //     { succes: false, message: "room not found" }
          //   );
          //   return;
          // };
          // for (const staff of res.result) {
          //   this.wss.emit(
          //     staff.staffDetailsId.toString(),
          //     {
          //       success: true,
          //       ...payload,
          //       sender_first_name: sender ? sender?.first_name : '',
          //       sender_last_name: sender ? sender?.last_name : '',
          //       alias: sender?.alias
          //     }
          //   );
          // };

          // await this.chatService.saveChat({
          //   ...payload,
          //   is_sent: true,
          // }, null, room_id);
          // return;
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