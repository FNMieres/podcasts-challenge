import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

interface PodcastDetailProps {
  image: string;
  title: string;
  author: string;
  description: string;
}

function PodcastDetail({
  image,
  title,
  author,
  description,
}: PodcastDetailProps) {
  return (
    <Card sx={{ display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        sx={{ width: "100%", display: { xs: "none", sm: "block" }, p: 4 }}
        image={image}
      />
      <Divider variant="middle" />
      <Box sx={{ py: 2, px: 2 }}>
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
      </Box>
      <Divider variant="middle" />
      <Box sx={{ py: 2, px: 2 }}>
        <Typography gutterBottom>Description:</Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic" }}>
          {description}
        </Typography>
      </Box>
    </Card>
  );
}

export default PodcastDetail;
