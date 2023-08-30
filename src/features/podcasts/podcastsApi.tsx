import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AllOriginsResponse } from "../../types/AllOriginsResponse";
import type {
  Entry,
  TopPodcastsResponse,
} from "../../types/TopPodcastsResponse";
import type { LookupResponse, Result } from "../../types/LookupResponse";

interface GetPodcastsArgs {
  genre: number;
  limit?: number;
}

interface GetPodcastEpisodesArgs {
  id: string;
  limit?: number;
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
      transformResponse: (response: AllOriginsResponse) => {
        const data: TopPodcastsResponse = JSON.parse(response.contents);
        return data.feed.entry;
      },
    }),
    getPodcastEpisodes: build.query<Result[], GetPodcastEpisodesArgs>({
      query: ({ id, limit = 20 }) => ({
        url: encodeURIComponent(
          `lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${limit}`,
        ),
      }),
      keepUnusedDataFor: 1440,
      transformResponse: (response: AllOriginsResponse) => {
        const data: LookupResponse = JSON.parse(response.contents);

        const episodes = data.results.filter(
          (result) => result.wrapperType === "podcastEpisode",
        );

        return episodes;
      },
    }),
  }),
});

export const { useGetPodcastsQuery, useGetPodcastEpisodesQuery } = podcastsApi;
