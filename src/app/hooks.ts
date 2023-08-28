import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppLoader = () =>
  useAppSelector((state) => {
    return Object.values(state.podcastsApi.queries).some((query) => {
      return query && query.status === QueryStatus.pending;
    });
  });
