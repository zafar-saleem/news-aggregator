import axiosClient from "./AxiosClient";
import { API_ROUTES } from "./API.config";

export const fetchNewsFeed = async (query: any | undefined) => {
  const res = await axiosClient.get(API_ROUTES.NEWS, { params: query });
  return res.data;
};

export const fetchCategoriesList = async () => {
  const res = await axiosClient.get(API_ROUTES.TOPICS);
  return res.data;
};

export const fetchAuthorsList = async () => {
  const res = await axiosClient.get(API_ROUTES.AUTHORS);
  return res.data;
};
