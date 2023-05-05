import express, { Express } from 'express';
import http from 'http';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import allRoutes from './routers';
import { dbConnection } from './models';
import cors from 'cors';
import { requsetLogger } from './middlewares/request.logger';
import { Server, Socket } from 'socket.io';
config();

export const app: Express = express();
const port = process.env.PORT || 3000;

// const activeUsers = {};
// const activeUsersArr = [];


dbConnection();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(requsetLogger);

app.use(allRoutes);

const server = http.createServer(app);
const io = new Server(server);

io
  .of('/chat')
  .on('connection', (socket: Socket) => {
    console.log('new user', socket.id, 'connected');

    socket.on('disconnect', () => {
      console.log('user', socket.id, 'user disconnected');
    });
  });

server.listen(port, () => {
  console.log(`⚡️[server]: Server listening on port ${port && +port}`);
});


export default app;