import movieReducer from "../slice/movieSlice";
import TVShowReducer from "../slice/TVShowSlice";

import thunk from "redux-thunk";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { movieReducer, TVShowReducer },
});
