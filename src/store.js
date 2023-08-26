import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./config";
import { gamesReducer } from "./features/games/games-slice";
import { filterReducer } from "./features/filter/filter-slice";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    filter: filterReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
