import { DataTypes, Model } from "sequelize";
import { sequelize } from './index';

export class User extends Model {
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

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  deleted_at: {
    type: DataTypes.DATE,
  },
  deleted_by: {
    type: DataTypes.STRING,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_sent: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  is_delivered: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  is_read: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
}, {
  sequelize,
  modelName: 'User',
  timestamps: false
});