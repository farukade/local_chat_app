import express, { Express } from 'express';
import http from 'http';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import allRoutes from './routers';
import { dbConnection } from './models';
import cors from 'cors';
import { requsetLogger } from './middlewares/request.logger';
import { Server } from 'socket.io';
import { initChatSocket } from './gateway';
config();

export const app: Express = express();
const port = process.env.PORT || 3000;


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
export const io = new Server(server);

initChatSocket();

server.listen(port, () => {
  console.log(`⚡️[server]: Server listening on port ${port && +port}`);
});


export default app;