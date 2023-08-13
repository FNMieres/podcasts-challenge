import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ItunesResponse } from "../../types/ItunesResponse";
import type { Contents, Entry } from "../../types/Contents";

interface GetPodcastsArgs {
  limit?: number;
  genre: number;
}

export const podcastsApi = createApi({
  reducerPath: "podcastsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://itunes.apple.com/",
    )}`,
  }),
  endpoints: (build) => ({
    getPodcasts: build.query<Entry[], GetPodcastsArgs>({
      query: ({ limit = 100, genre }) => ({
        url: encodeURIComponent(
          `us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`,
        ),
      }),
      transformResponse: (response: ItunesResponse) => {
        const data: Contents = JSON.parse(response.contents);
        return data.feed.entry;
      },
    }),
  }),
});

export const { useGetPodcastsQuery } = podcastsApi;
