import { useMutation } from "react-query";
import axios from "axios";
import { LoginParams } from "../utils/types";
import { request } from "../services/axios-utils";

const sendUserDetails = (user: LoginParams) => {
  return axios.post("http://localhost:7001/users/login", user);
};
// const sendUserDetails = (user: LoginParams) => {
//   return request({ url: "/users/login", method: "POST", data: user });
// };

export const useLoginWithUser = () => {
  return useMutation(sendUserDetails, {
    retry: 0,
  });
};
