import axios from "axios";
import { IAxiosRequestOptions, ILocalStorageUser } from "../utils/types";
import { store } from "../redux/App/store";
import { setLoggedInUser } from "../redux/Features/authSlice";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:7001",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  console.log("rnadom call", config);

  // store.dispatch(setLoggedInUser(false));

  return config;
});

export const request = ({ isAuth = false, ...options }: IAxiosRequestOptions) => {
  const item = localStorage.getItem("lca_user");
  const user: ILocalStorageUser = item ? JSON.parse(item) : null;

  if (isAuth && user) {
    console.log(isAuth, user);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${user.token}`;
  }

  return axiosInstance(options);
};
