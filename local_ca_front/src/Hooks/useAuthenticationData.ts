import { useMutation } from "react-query";

import { ILoginParams } from "../utils/types";
import { axiosInstance, request } from "../services/axios-utils";

// const sendUserDetails = (user: LoginParams) => {
//   return axiosInstance.post<LoginResponse>("/users/login", user);
// };
const sendUserDetails = (user: ILoginParams) => {
  return request({ url: "/users/login", method: "POST", isAuth: false, data: user });
};

export const useLoginWithUser = () => {
  return useMutation(sendUserDetails, {
    retry: false,
  });
};
