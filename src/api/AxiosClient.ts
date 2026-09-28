import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosClient.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_FREE_NEWS_API_KEY;
  if (token) {
    config.headers['x-api-key'] = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
