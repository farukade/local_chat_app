import { AxiosError } from "axios";

/**AXIOS TYPES */
export interface IAxiosRequestOptions {
  isAuth?: boolean;
  [key: string]: any;
}

export interface ISignupParams {
  username: string;
  password: string;
  details: string;
}

type CreateDetails = Omit<ISignupParams, "details">;

export interface ILoginParams {
  username: string;
  password: string;
}

export type OptionalLoginParams = Omit<ILoginParams, "username" | "password"> & {
  username?: string;
  password?: string;
};

export interface ILoginResponse {
  data: {
    success: boolean;
    message: string;
    result: {
      token: string;
      payload: {
        username: string;
        userType: string;
        id: string;
      };
    };
  };
}

export interface ILocalStorageUser {
  token: string;
  payload: {
    username: string;
    userType: string;
    id: string;
  };
}

export type IErrorBlock = {
  name: string;
};

export type alertProps = {
  message: string;
};
