import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "@@filter",
  initialState: {
    values: {},
    labels: {
      platform: "All Platforms",
      category: "All Genres",
      sortBy: "Relevance",
    },
  },
  reducers: {
    setPlatform: (state, action) => {
      state.values.platform = action.payload.value;
      state.labels.platform = action.payload.label;
    },
    setCategory: (state, action) => {
      state.values.category = action.payload.value;
      state.labels.category = action.payload.label;
    },
    setSortBy: (state, action) => {
      state.values["sort-by"] = action.payload.value;
      state.labels.sortBy = action.payload.label;
    },
    clearCategory: (state, _) => {
      if (state.category) {
        delete state.values.category;
        state.labels.category = "All Genres";
      }
    },
  },
});

export const { setPlatform, setCategory, setSortBy, clearCategory } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const selectFilters = (state) => state.filter.values;
export const selectFiltersLabel = (state) => state.filter.labels;
