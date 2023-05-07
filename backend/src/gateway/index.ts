import { io } from "..";
import { Socket } from 'socket.io';
import chatGateway from "./chat.gateway";

export const initChatSocket = () => {
  try {
    io
      .of('/chat')
      .on('connection', (socket: Socket) => {
        console.log('new user', socket.id, 'connected');

        chatGateway.sendChat(socket);

        socket.on('disconnect', () => {
          console.log('user', socket.id, 'user disconnected');
        });
      });
  } catch (error) {
    console.log(error);
  }
} 