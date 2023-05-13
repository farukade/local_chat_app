import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:7001" });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer kdkdkdkdkdk`;
  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    // console.log(error.response.data);
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
