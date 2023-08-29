import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {
  usePodcastEpisodes,
  usePodcasts,
} from "../features/podcasts/podcastsHooks";
import PodcastDetail from "../features/podcasts/components/PodcastDetail";
import EpisodesList from "../features/podcasts/components/EpisodesList";

function PodcastPage() {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { podcast } = usePodcasts({ podcastId });
  const { episodes } = usePodcastEpisodes({ podcastId: podcastId! });

  return (
    <Container maxWidth="lg" sx={{ my: 6 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          {podcast && (
            <PodcastDetail
              image={podcast["im:image"][2].label}
              title={podcast["im:name"].label}
              author={podcast["im:artist"].label}
              description={podcast.summary.label}
            />
          )}
        </Grid>
        {episodes && <EpisodesList data={episodes} />}
      </Grid>
    </Container>
  );
}

export default PodcastPage;
