import { ITokenPayload } from "../types/token.payload.interface";
import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { User } from "../models/user.model";
import { IResult } from "../types/result.interface";
import { pbkdf2Sync } from "crypto";
import { IUser } from "../types/user.interface";
config();

const secret = process.env.SECRET || "";

export const getPayload = (user: IUser): ITokenPayload => {
  const payload = {
    username: user.username,
    userType: user.user_type,
    id: user.id,
  }
  return payload;
}

export const getToken = async (id: string) => {
  const user = await User.findByPk(id);
  if (!user) return false;
  const payload: ITokenPayload = getPayload(user);
  const token = jwt.sign(payload, secret, {
    expiresIn: 300000,
  });
  return {
    token,
    payload,
  };
}

export const isValidPassword = async (user: IUser, password: string): Promise<IResult> => {
  const { username, salt } = user;

  var hash = pbkdf2Sync(password, salt || "", 1000, 64, `sha512`).toString(`hex`);
  if (user.password === hash) {
    return { success: true, message: "password verification success", data: user }
  };
  return { success: false, message: "password verification failed" }
}

export const getChatRoomId = (arr: string[]) => {
  const sortedArr = arr.sort();
  return sortedArr.join('-');
};