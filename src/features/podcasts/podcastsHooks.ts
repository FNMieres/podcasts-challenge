import { useGetPodcastEpisodesQuery, useGetPodcastsQuery } from "./podcastsApi";

interface UsePodcastsArgs {
  podcastId?: string;
  genre?: number;
  filterValue?: string;
}

export const usePodcasts = ({
  podcastId,
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

  const podcastFound =
    podcastId &&
    podcasts?.find((podcast) => podcast.id.attributes["im:id"] === podcastId);

  return {
    podcast: podcastFound,
    podcasts: podcastsFiltered,
    isLoadingPodcasts: isLoading,
  };
};

interface UsePodcastEpisodesArgs {
  podcastId: string;
  episodeId?: number;
}

export const usePodcastEpisodes = ({
  podcastId,
  episodeId,
}: UsePodcastEpisodesArgs) => {
  const { data: episodes, isLoading } = useGetPodcastEpisodesQuery({
    id: podcastId,
  });

  const episodeFound =
    episodeId && episodes?.find((episode) => episode.trackId === episodeId);

  return { episode: episodeFound, episodes, isLoadingEpisodes: isLoading };
};
