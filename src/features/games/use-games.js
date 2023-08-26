import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadGames, selectGamesData, selectGamesInfo } from "./games-slice";
import { selectFilters } from "../filter/filter-slice";

export const useGames = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectGamesData);
  const filters = useSelector(selectFilters);
  const { status, error, qty } = useSelector(selectGamesInfo);

  useEffect(() => {
    if (!qty) dispatch(loadGames());
  }, [qty, dispatch]);

  useEffect(() => {
    if (Object.keys(filters).length) dispatch(loadGames(filters));
  }, [filters, dispatch]);

  return [games, { status, error, qty }];
};
