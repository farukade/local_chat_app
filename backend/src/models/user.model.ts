import { Model, Sequelize } from "sequelize";

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
export const UserModel = (sequelize: Sequelize, dataType: any) => {
  User.init({
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
    username: {
      type: dataType.STRING,
      allowNull: false
    },
    password: {
      type: dataType.STRING,
      allowNull: false
    },
    user_type: {
      type: dataType.STRING,
      allowNull: false,
      defaultValue: "regular"
    },
    photo: {
      type: dataType.STRING,
    },
    salt: {
      type: dataType.STRING,
      allowNull: false,
    },
    details: {
      type: dataType.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'user',
    timestamps: false
  });
}