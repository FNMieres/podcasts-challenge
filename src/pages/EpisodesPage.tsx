import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { usePodcastEpisodes } from "../features/podcasts/podcastsHooks";
import EpisodesList from "../features/podcasts/components/EpisodesList";

function EpisodesPage() {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { episodes } = usePodcastEpisodes({ podcastId: podcastId! });

  return (
    episodes && (
      <Grid container gap={4}>
        <Paper sx={{ p: 2, width: "100%" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Episodes: {episodes.length}
          </Typography>
        </Paper>
        <EpisodesList data={episodes} />
      </Grid>
    )
  );
}

export default EpisodesPage;
