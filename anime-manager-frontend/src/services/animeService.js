/* File to make the API calls here */
import { axiosInstance as axios } from "../api/api.instance";

export const searchAnime = (data) => {
  return axios({
    method: "POST",
    url: "/features/searchAnime",
    data: { animeName: data },
  });
};

export const addAnimeWatchlist = (data) => {
  return axios({
    method: "POST",
    url: "/features/addToWatchlist",
    data: { animeData: data },
  });
};

export const getAnimeWatchlist = () => {
  return axios({
    method: "GET",
    url: "/features/getWatchlist",
  });
};

export const deleteAnimeWatchlist = (animeId) => {
  return axios({
    method: "DELETE",
    url: `/features/deleteFromWatchlist/${animeId}`,
  });
};
