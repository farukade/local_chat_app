import { Model, Sequelize } from "sequelize";

export class UserRoom extends Model {
  id!: string;
  user_id!: string;
  room_id!: string;
}
export const UserRoomModel = (sequelize: Sequelize, dataType: any) => {
  UserRoom.init({
    id: {
      type: dataType.UUID,
      defaultValue: dataType.UUIDV4,
      primaryKey: true,
    },
    room_id: {
      type: dataType.STRING,
      allowNull: false
    },
    user_id: {
      type: dataType.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'rser_room',
    timestamps: false
  });
}