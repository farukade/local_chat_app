import { Model, Sequelize } from "sequelize";

export class Room extends Model {
  id!: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  deleted_by?: string;
  name!: string;
  slug!: string;
  description?: string;
}
export const RoomModel = (sequelize: Sequelize, dataType: any) => {
  Room.init({
    id: {
      type: dataType.UUID,
      defaultValue: dataType.UUIDV4,
      primaryKey: true,
    },
    created_at: {
      type: dataType.DATE,
      allowNull: false,
      defaultValue: dataType.NOW,
    },
    updated_at: {
      type: dataType.DATE,
      allowNull: false,
      defaultValue: dataType.NOW,
    },
    deleted_at: {
      type: dataType.DATE,
    },
    deleted_by: {
      type: dataType.STRING,
    },
    name: {
      type: dataType.STRING,
      allowNull: false
    },
    slug: {
      type: dataType.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: dataType.STRING,
    }
  }, {
    sequelize,
    modelName: 'room',
    timestamps: false
  });
}