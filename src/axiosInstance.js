import axios from "axios";
import { TOKEN_STORED } from "./utils/authUtils";
import { backend_url } from "./utils/settings";

const axiosInstance = axios.create({
  baseURL: backend_url,
});

//Now I don't have to include the token every time
axiosInstance.interceptors.request.use(
  (config) => {
    const token = TOKEN_STORED;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
