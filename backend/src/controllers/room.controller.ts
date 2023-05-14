import { Request, Response } from 'express';
import { Room } from '../models/room.model';
import { constants } from './constants';
import { IPaging } from '../types/paging.interface';
import { UserRoom } from '../models/user_room_rooms.model';
const { handleError, handleSuccess, handleBadRequest } = constants;

export const roomController = {
  getRoomsLocal: async (room_id: string) => {
    try {
      const room = await Room.findByPk(room_id);
      // const users: UserRoom[] | null = room && await UserRoom.findAll({ where: { room } });

      const users = room && await UserRoom.sequelize?.query(`
          SELECT * FROM user_rooms
          RIGHT JOIN users
          ON user_id = users.id
          WHERE room_id = ${room_id}
      `);

      return room ? { room, users } : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  getRooms: async (req: Request, res: Response) => {
    try {
      const { room_id } = req.query;
      const page = req.query.page ? Number(req.query.page) : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 10;

      if (room_id && room_id !== "") {
        const room = await Room.findByPk(room_id.toString());
        return room ?
          handleSuccess(res, room, "room found", 200, null) :
          handleBadRequest(res, 400, "room not found");
      }

      const { rows: rooms, count } = await Room.findAndCountAll({
        offset: page - 1,
        limit,
      });

      const paging: IPaging = {
        itemsPerPage: limit,
        totalpages: count / limit,
        totalItems: count,
        currentPage: page
      }

      return rooms.length ?
        handleSuccess(res, rooms, "rooms found", 200, paging) :
        handleBadRequest(res, 400, "rooms not found");
    } catch (error) {
      handleError(res, error);
    }
  }
}