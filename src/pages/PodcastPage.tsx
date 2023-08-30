import { Outlet, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { usePodcasts } from "../features/podcasts/podcastsHooks";
import PodcastDetail from "../features/podcasts/components/PodcastDetail";

function PodcastPage() {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { podcast } = usePodcasts({ podcastId });

  return (
    <Container maxWidth="lg" sx={{ my: 6 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          {podcast && (
            <PodcastDetail
              id={podcast.id.attributes["im:id"]}
              image={podcast["im:image"][2].label}
              title={podcast["im:name"].label}
              author={podcast["im:artist"].label}
              description={podcast.summary.label}
            />
          )}
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}

export default PodcastPage;
