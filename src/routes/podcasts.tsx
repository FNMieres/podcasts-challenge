import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Contents, Entry } from "../types/Entry";
import { ItunesResponse } from "../types/ItunesResponse";

function PodcastsRoute() {
  const [podcasts, setPodcasts] = useState<Entry[] | null>(null);

  useEffect(() => {
    axios
      .get<ItunesResponse>(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
        )}`,
      )
      .then((response) => {
        const data: Contents = JSON.parse(response.data.contents);
        setPodcasts(data.feed.entry);
      });
  }, []);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {podcasts?.map((podcast) => (
          <Grid item key={podcast.id.attributes["im:id"]} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  pt: "100%",
                  borderRadius: 200,
                }}
                image={podcast["im:image"][2].label}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {podcast["im:name"].label}
                </Typography>
                <Typography>Author: {podcast["im:artist"].label}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PodcastsRoute;
