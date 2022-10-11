import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TVShowService } from "../service/TVShowService";

const initialValue = { VTShow: [], isLoasing: false };

export const TVShowAction = {
  getTVShow: createAsyncThunk("TVShow/getTVShow", async (type) => {
    const res = await TVShowService.getTVShow(type);
    return res;
  }),
};

export const TVShowSlice = createSlice({
  name: "TVShow",
  initialState: initialValue,
  reducers: {
    getTVShow(state, action) {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(TVShowAction.getTVShow.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(TVShowAction.getTVShow.fulfilled, (state, action) => {
      state.isLoading = false;
      state.TVShows = action.payload;
    });
  },
});

export default TVShowSlice.reducer;
