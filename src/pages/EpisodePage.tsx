import { useParams } from "react-router-dom";
import { usePodcastEpisodes } from "../features/podcasts/podcastsHooks";
import EpisodeCard from "../features/podcasts/components/EpisodeCard";

function EpisodePage() {
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();

  const { episode } = usePodcastEpisodes({
    podcastId: podcastId!,
    episodeId: +episodeId!,
  });

  return (
    episode && (
      <EpisodeCard
        title={episode.trackName}
        description={episode.description!}
        audioSrc={episode.episodeUrl!}
        audioType={`${episode.episodeContentType}/${episode.episodeFileExtension}`}
      />
    )
  );
}

export default EpisodePage;
