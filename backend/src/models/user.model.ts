import { DataTypes, Model } from "sequelize";
import { sequelize } from './index';

export class User extends Model {
  id!: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  deleted_by?: string;
  username!: string;
  password!: string;
  user_type!: string;
  salt!: string;
  photo?: string;
  details?: string;
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
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_type: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "regular"
  },
  photo: {
    type: DataTypes.STRING,
  },
  salt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'User',
  timestamps: false
});