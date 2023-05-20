import { request } from "./axios-utils";

export const fetchUser = () => {
  return request({ url: "/users", method: "GET", isAuth: true });
};
