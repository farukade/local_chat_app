import { AxiosError } from "axios";

// Types

export type FormElements<U extends string> = HTMLFormControlsCollection & Record<U, HTMLInputElement>;

export type CreateDetails = Omit<ISignupParams, "details">;
export type OptionalLoginParams = Omit<ILoginParams, "username" | "password"> & {
  username?: string;
  password?: string;
};

export type IErrorBlock = {
  name: string;
};

export type alertProps = {
  message: string;
};

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

export interface ILoginParams {
  username: string;
  password: string;
}

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
