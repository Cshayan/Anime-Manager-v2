import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAnimeWatchlistStart,
  getAnimeWatchlistStart,
  setAnimeIdToDelete,
  deleteAnimeWatchlistStart,
} from "../actions/animeAction";
import {
  openAnimeDeleteDialog,
  closeAnimeDeleteDialog,
} from "../actions/dialogAction";

const selectWatchlist = ({ anime: { watchlist = [] } }) => watchlist;
const selectAnimeId = ({ anime: { animeIdToDelete = "" } }) => animeIdToDelete;

export const useAnime = () => {
  const dispatch = useDispatch();
  const animeWatchlist = useSelector(selectWatchlist);
  const animeIdToDelete = useSelector(selectAnimeId);

  const handleAnimeAddToWatchlistClick = (animeData) => {
    addAnimeToWatchlist(animeData);
  };

  const handleDeleteFromWatchlistClick = (animeIdToDelete) => {
    dispatch(openAnimeDeleteDialog());
    dispatch(setAnimeIdToDelete(animeIdToDelete));
  };

  const addAnimeToWatchlist = (animeData) => {
    dispatch(addAnimeWatchlistStart(animeData));
  };

  const deleteAnimeFromWatchlist = () => {
    dispatch(deleteAnimeWatchlistStart(animeIdToDelete));
    dispatch(closeAnimeDeleteDialog());
    dispatch(setAnimeIdToDelete(""));
  };

  const fetchAnimes = useCallback(() => {
    dispatch(getAnimeWatchlistStart());
  }, [dispatch]);

  return {
    handleAnimeAddToWatchlistClick,
    fetchAnimes,
    animeWatchlist,
    handleDeleteFromWatchlistClick,
    deleteAnimeFromWatchlist,
  };
};
