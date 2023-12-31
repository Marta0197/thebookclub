import axios from "axios";
import {
  getAccessToken,
  logout,
  logoutToLogin,
} from "../stores/AccessTokenStore";

const INVALID_STATUS_CODES = [401];

export const createHttp = (useAccessToken = false) => {
  const http = axios.create({
    baseURL: "http://localhost:3001",
  });

  http.interceptors.request.use(
    (config) => {
      if (useAccessToken && getAccessToken()) {
        config.headers.Authorization = `Bearer ${getAccessToken()}`;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );
  http.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (
        error?.response?.status &&
        INVALID_STATUS_CODES.includes(error.response.status)
      ) {
        logoutToLogin();
      }

      return Promise.reject(error);
    }
  );

  return http;
};
