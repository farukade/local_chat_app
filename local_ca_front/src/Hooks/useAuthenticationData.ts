import { useMutation, useQuery } from "react-query";
import { ILoginParams, ISignupParams } from "../utils/types";
import { request } from "../services/axios-utils";

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

const registerUser = (user: ISignupParams) => {
  return request({ url: "/users", method: "POST", data: user });
};

export const usePostSignup = (user: ISignupParams, createUser: any) => {
  return useQuery(["users-create", user], () => registerUser(user), {
    enabled: false,
    retry: false,
    onSuccess: createUser,
  });
};
