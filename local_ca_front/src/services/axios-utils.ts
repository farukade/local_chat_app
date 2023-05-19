import axios from "axios";
import { IAxiosRequestOptions, ILocalStorageUser } from "../utils/types";
import { store } from "../redux/App/store";
import { setLoggedInUser } from "../redux/Features/authSlice";
import { LOCALHOST_URL } from "../utils/constants";

export const axiosInstance = axios.create({
  baseURL: LOCALHOST_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// An axios InterCeptor for after Response
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("rnadom call", response);

    return Promise.resolve(response);
  },
  (error) => {
    console.log(error, "setting err");

    if (error.response.status === 401 || error.response.statusText === "Unauthorized") {
      store.dispatch(setLoggedInUser(false));
      localStorage.removeItem("lca_user");

      const redirect = "/?q=session expired";

      window.location.assign(redirect);
    }

    return Promise.reject(error);
  }
);

export const request = ({ isAuth = false, ...options }: IAxiosRequestOptions) => {
  const item = localStorage.getItem("lca_user");
  const user: ILocalStorageUser = item ? JSON.parse(item) : null;

  if (isAuth && user) {
    console.log(isAuth, user);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${user.token}`;
  }

  return axiosInstance(options);
};
