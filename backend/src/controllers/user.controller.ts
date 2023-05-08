import { pbkdf2Sync, randomBytes } from 'crypto';
import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { ILogin } from '../types/login.interface';
import { IUser } from '../types/user.interface';
import { getToken, isValidPassword } from '../utils/utils';
import { constants } from './constants';
const { handleError, handleBadRequest, handleSuccess } = constants;

export const userController = {
  get: async (req: Request, res: Response) => {
    try {
      const { id } = req.query;

      if (id) {
        const result = await User.findOne({ where: { id } });
        if (result) return handleSuccess(res, result, "user found", 200, null);
        return handleBadRequest(res, 400, "user not found");
      } else {
        const result = await User.findAll();
        if (result.length) return handleSuccess(res, result, "users found", 200, null);
        return handleBadRequest(res, 400, "users not found");
      };

    } catch (error) {
      handleError(res, error);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const body: IUser = req.body;

      const { username, password, ...restBody }: IUser = body;
      if (!username || !password) return handleBadRequest(res, 400, "no username | email | password in parameters");

      if (username?.length < 3 || password?.length < 5)
        return handleBadRequest(res, 400, "username | password not of required length");

      const existing = await User.findOne({ where: { username } })
      if (existing) return handleBadRequest(res, 400, `${username} already registered`);

      const salt = randomBytes(30).toString('hex');
      const hash = pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);

      console.log({
        username: username.toLowerCase(),
        password: hash,
        salt,
        ...restBody
      });
      const user = new User({
        username: username.toLowerCase(),
        password: hash,
        salt,
        ...restBody
      });
      let savedData = await user.save();

      if (savedData) {
        return handleSuccess(res, savedData, "user created", 201, null)
      };
      return handleBadRequest(res, 500, "unexpected error");
    } catch (error) {
      return handleError(res, error);
    }
  },
  login: async (req: Request, res: Response) => {
    try {
      const { username, password }: ILogin = req.body;
      if (!username || username?.length < 5 || !password || password?.length < 5)
        return handleBadRequest(res, 400, "password verification failed");

      const user = await User.findOne({ where: { username } });
      if (!user) return handleBadRequest(res, 400, "invalid credentials")

      let rs = await isValidPassword(user, password);
      if (rs.success) {
        const token = await getToken(rs?.data?._id);
        return handleSuccess(res, token, rs?.message, 200, null);
      }
      return handleBadRequest(res, 400, rs.message || "unexpected error");
    } catch (error) {
      return handleError(res, error);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.query;
      if (!id || !id.length) {
        return handleBadRequest(res, 400, "no id in req params");
      }
      const result = await User.destroy({ where: { id: +id } });
      if (result) return handleSuccess(res, undefined, result.toString() + " user(s) deleted", 200, undefined);
      handleBadRequest(res, 400, "unexpected error, delete failed");
    } catch (error) {
      return handleError(res, error);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const { id, ...restData } = req.body;
      if (!id || !restData) return handleBadRequest(res, 400, "req body incomplete");

      const result = await User.update(restData, { where: { id: +id } });
      if (result) return handleSuccess(res, undefined, result.toString() + " user(s) modified", 200, undefined);
      handleBadRequest(res, 400, "unexpected error, modification failed");
    } catch (error) {
      handleError(res, error);
    }
  },
  verify: async (req: Request, res: Response) => {
    return handleSuccess(res, null, "verification success", 200, null);
  },
  getUserLocal: async (id: string) => {
    try {
      if (id) {
        const result = await User.findByPk(id);
        if (result) return result
        return false;
      }
      return false;
    } catch (error) {
      handleError(null, error);
    }
  }
}