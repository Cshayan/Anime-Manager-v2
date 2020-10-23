/* File to make the API calls here */
import { axiosInstance as axios } from "../api/api.instance";

const loginUser = (data) => {
  return axios({
    method: "POST",
    url: "/auth/signIn",
    data,
  });
};

const registerUser = (data) => {
  return axios({
    method: "POST",
    url: "/auth/signUp",
    data,
  });
};

const getMe = () => {
  return axios({
    method: "GET",
    url: "/auth/getMe",
  });
};

export const APIS = { loginUser, registerUser, getMe };
