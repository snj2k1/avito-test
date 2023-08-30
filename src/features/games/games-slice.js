import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadGames = createAsyncThunk(
  "@@games/load-games",
  async (filters, { extra: { client, api } }) => {
    const data = await client
      .get(api.GAMES_URL, {
        ...api.GAMES_OPTIONS,
        params: { ...filters },
      })
      .then((response) => response.data);
    return data;
  }
);

const initialState = {
  status: "idle",
  error: null,
  data: [],
};

const gamesSlice = createSlice({
  name: "@@games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadGames.pending, (state, _) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadGames.fulfilled, (state, action) => {
        state.status = "recieved";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(loadGames.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const gamesReducer = gamesSlice.reducer;
export const selectGamesInfo = (state) => ({
  status: state.games.status,
  error: state.games.error,
  qty: state.games.data.length,
});
export const selectGamesData = (state) => state.games.data;
