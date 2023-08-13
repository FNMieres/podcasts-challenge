import { useGetPodcastsQuery } from "./podcastsApi";

interface UsePodcastsArgs {
  genre?: number;
}
const usePodcasts = ({ genre = 1310 }: UsePodcastsArgs = {}) => {
  const { data, isLoading } = useGetPodcastsQuery({ genre });

  return { podcasts: data, isLoadingPodcasts: isLoading };
};

export default usePodcasts;
