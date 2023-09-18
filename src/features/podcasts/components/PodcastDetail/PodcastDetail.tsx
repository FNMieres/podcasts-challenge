import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import RouterLink from "../../../../components/RouterLink/RouterLink";
import { PODCASTS_PATH } from "../../../../constants";

interface PodcastDetailProps {
  id: string;
  image: string;
  title: string;
  author: string;
  description: string;
}

function PodcastDetail({
  id,
  image,
  title,
  author,
  description,
}: PodcastDetailProps) {
  return (
    <Card sx={{ display: "flex", flexDirection: "column" }}>
      <RouterLink to={`/${PODCASTS_PATH}/${id}`} sx={{ m: 4 }}>
        <CardMedia
          component="img"
          sx={{ width: "100%", display: { xs: "none", sm: "block" } }}
          image={image}
        />
      </RouterLink>
      <Divider variant="middle" />
      <RouterLink
        to={`/${PODCASTS_PATH}/${id}`}
        sx={{ my: 2, mx: 2 }}
        underline="none"
        color="inherit"
      >
        <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontStyle: "italic" }}
        >
          by {author}
        </Typography>
      </RouterLink>
      <Divider variant="middle" />
      <Box sx={{ my: 2, mx: 2 }}>
        <Typography gutterBottom>Description:</Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic" }}>
          {description}
        </Typography>
      </Box>
    </Card>
  );
}

export default PodcastDetail;
