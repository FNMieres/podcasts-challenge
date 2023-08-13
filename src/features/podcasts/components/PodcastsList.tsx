import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import PodcastCard from "./PodcastCard";
import { Entry } from "../../../types/Contents";

interface PodcastsListProps {
  data: Entry[] | undefined;
  onClickPodcast: (id: string) => void;
}

function PodcastsList({ data, onClickPodcast }: PodcastsListProps) {
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {data?.map((podcast) => (
          <Grid item key={podcast.id.attributes["im:id"]} xs={6} sm={4} md={3}>
            <PodcastCard data={podcast} onClick={onClickPodcast} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PodcastsList;