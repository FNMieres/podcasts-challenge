import { useNavigate } from "react-router-dom";
import usePodcasts from "../features/podcasts/podcastsHooks";
import PodcastsList from "../features/podcasts/components/PodcastsList";

function PodcastsPage() {
  const { podcasts } = usePodcasts();
  const navigate = useNavigate();

  const handlePodcastClick = (podcastId: string) => {
    navigate(`/podcasts/${podcastId}`);
  };

  return <PodcastsList data={podcasts} onClickPodcast={handlePodcastClick} />;
}

export default PodcastsPage;
