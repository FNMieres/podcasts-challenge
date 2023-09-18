import { combineReducers } from "@reduxjs/toolkit";
import { podcastsApi } from "../features/podcasts/podcastsApi";

const rootReducer = combineReducers({
  [podcastsApi.reducerPath]: podcastsApi.reducer,
});

export default rootReducer;
