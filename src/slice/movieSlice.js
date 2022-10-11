import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "../service/movieService";

const initialValue = { movies: [], isLoading: false, type: "" };

export const movieAction = {
  getMovie: createAsyncThunk("movie/getMovie", async (type) => {
    const res = await movieService.getMovies(type);
    return res;
  }),

  getDetailMovie: createAsyncThunk("movie/getDetailMovie", async (id) => {
    const res = await movieService.getDetailMovie(id);
    return res;
  }),
};

export const movieSlice = createSlice({
  name: "movie",
  initialState: initialValue,
  reducers: {
    getMovie(state, action) {
      state = action.payload;
    },

    getDetailMovie(state, action) {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(movieAction.getMovie.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(movieAction.getMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.data;
      console.log(action.payload);
      state.type = action.payload.type;
    });

    builder.addCase(movieAction.getDetailMovie.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(movieAction.getDetailMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    });
  },
});

export default movieSlice.reducer;
