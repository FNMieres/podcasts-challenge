import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePodcasts from "../features/podcasts/podcastsHooks";
import PodcastsList from "../features/podcasts/components/PodcastsList";
import PodcastFilter from "../features/podcasts/components/PodcastFilter";

function PodcastsPage() {
  const [filterValue, setFilterValue] = useState<string>("");
  const { podcasts } = usePodcasts({ filterValue });
  const navigate = useNavigate();

  const handlePodcastClick = (podcastId: string) => {
    navigate(`/podcasts/${podcastId}`);
  };

  const handleFilter = (value: string) => {
    setFilterValue(value);
  };

  return (
    <>
      <PodcastFilter
        podcastCount={podcasts?.length || 0}
        filterValue={filterValue}
        onFilterChange={handleFilter}
      />
      <PodcastsList data={podcasts} onClickPodcast={handlePodcastClick} />
    </>
  );
}

export default PodcastsPage;
