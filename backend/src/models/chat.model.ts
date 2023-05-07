import { Model, Sequelize } from "sequelize";

export class Chat extends Model {
  id!: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  deleted_by?: string;
  body!: string;
  is_sent!: boolean;
  is_delivered!: boolean;
  is_read!: boolean;
}

export const chatModel = (sequelize: Sequelize, dataType: any) => {
  Chat.init({
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
    body: {
      type: dataType.STRING,
      allowNull: false
    },
    is_sent: {
      type: dataType.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    is_delivered: {
      type: dataType.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    is_read: {
      type: dataType.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    sender_id: {
      type: dataType.STRING,
      allowNull: false,
    },
    recipient_id: {
      type: dataType.STRING,
    },
  }, {
    sequelize,
    modelName: 'Chat',
    timestamps: false
  });
}