import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {
  // usePodcastEpisodes,
  usePodcasts,
} from "../features/podcasts/podcastsHooks";
import PodcastDetail from "../features/podcasts/components/PodcastDetail";

function PodcastPage() {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { podcasts } = usePodcasts();
  // const { episodes } = usePodcastEpisodes({ podcastId: podcastId! });

  const podcastFound = podcasts?.find(
    (podcast) => podcast.id.attributes["im:id"] === podcastId,
  );

  if (!podcastFound) {
    return null;
  }

  return (
    <Container maxWidth="lg" sx={{ my: 6 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <PodcastDetail
            image={podcastFound["im:image"][2].label}
            title={podcastFound["im:name"].label}
            author={podcastFound["im:artist"].label}
            description={podcastFound.summary.label}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default PodcastPage;
