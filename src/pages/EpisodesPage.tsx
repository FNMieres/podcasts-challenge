import { useParams } from "react-router-dom";
import { usePodcastEpisodes } from "../features/podcasts/podcastsHooks";
import EpisodesList from "../features/podcasts/components/EpisodesList";

function EpisodesPage() {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { episodes } = usePodcastEpisodes({ podcastId: podcastId! });

  return episodes && <EpisodesList data={episodes} />;
}

export default EpisodesPage;
