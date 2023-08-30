import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router";
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
  const { data: podcasts } = useGetPodcastsQuery({ genre });
  const navigate = useNavigate();

  const podcastsFiltered = useMemo(
    () =>
      filterValue
        ? podcasts?.filter(
            (podcast) =>
              podcast["im:name"].label
                .toLowerCase()
                .includes(filterValue.toLowerCase()) ||
              podcast["im:artist"].label
                .toLowerCase()
                .includes(filterValue.toLowerCase()),
          )
        : podcasts,
    [filterValue, podcasts],
  );

  const podcastFound = useMemo(
    () =>
      podcastId &&
      podcasts?.find((podcast) => podcast.id.attributes["im:id"] === podcastId),
    [podcastId, podcasts],
  );

  const navigateToPodcastById = useCallback((id: string) => {
    navigate(`/podcasts/${id}`);
  }, []);

  return {
    podcast: podcastFound,
    podcasts: podcastsFiltered,
    navigateToPodcastById,
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

  const episodeFound = useMemo(
    () =>
      episodeId && episodes?.find((episode) => episode.trackId === episodeId),
    [episodeId, episodes],
  );

  return { episode: episodeFound, episodes, isLoadingEpisodes: isLoading };
};
