import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { usePodcasts } from "../features/podcasts/podcastsHooks";
import PodcastsList from "../features/podcasts/components/PodcastsList";
import PodcastFilter from "../features/podcasts/components/PodcastFilter";

function PodcastsPage() {
  const [filterValue, setFilterValue] = useState("");
  const { podcasts } = usePodcasts({ filterValue });
  const navigate = useNavigate();

  const handlePodcastClick = (podcastId: string) => {
    navigate(`/podcasts/${podcastId}`);
  };

  const handleFilter = (value: string) => {
    setFilterValue(value);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ float: "right" }}>
          <PodcastFilter
            podcastCount={podcasts?.length || 0}
            filterValue={filterValue}
            onFilterChange={handleFilter}
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <PodcastsList data={podcasts} onClickPodcast={handlePodcastClick} />
      </Container>
    </Box>
  );
}

export default PodcastsPage;
