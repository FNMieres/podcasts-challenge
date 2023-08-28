import { useGetPodcastEpisodesQuery, useGetPodcastsQuery } from "./podcastsApi";

interface UsePodcastsArgs {
  genre?: number;
  filterValue?: string;
}

export const usePodcasts = ({
  genre = 1310,
  filterValue,
}: UsePodcastsArgs = {}) => {
  const { data: podcasts, isLoading } = useGetPodcastsQuery({ genre });

  const podcastsFiltered = filterValue
    ? podcasts?.filter(
        (podcast) =>
          podcast["im:name"].label
            .toLowerCase()
            .includes(filterValue.toLowerCase()) ||
          podcast["im:artist"].label
            .toLowerCase()
            .includes(filterValue.toLowerCase()),
      )
    : podcasts;

  return { podcasts: podcastsFiltered, isLoadingPodcasts: isLoading };
};

interface UsePodcastEpisodesArgs {
  podcastId: string;
}

export const usePodcastEpisodes = ({ podcastId }: UsePodcastEpisodesArgs) => {
  const { data: episodes, isLoading } = useGetPodcastEpisodesQuery({
    id: podcastId,
  });

  return { episodes, isLoadingEpisodes: isLoading };
};
