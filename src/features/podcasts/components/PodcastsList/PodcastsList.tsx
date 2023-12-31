import Grid from "@mui/material/Grid";
import PodcastCard from "../PodcastCard";
import { Entry } from "../../../../types/TopPodcastsResponse";

interface PodcastsListProps {
  data: Entry[] | undefined;
  onClickPodcast: (id: string) => void;
}

function PodcastsList({ data, onClickPodcast }: PodcastsListProps) {
  return (
    <Grid container spacing={4}>
      {data?.map((podcast) => (
        <Grid item key={podcast.id.attributes["im:id"]} xs={6} sm={4} md={3}>
          <PodcastCard
            id={podcast.id.attributes["im:id"]}
            image={podcast["im:image"][2].label}
            title={podcast["im:name"].label}
            author={podcast["im:artist"].label}
            onClick={onClickPodcast}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default PodcastsList;
