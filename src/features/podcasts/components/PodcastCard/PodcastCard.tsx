import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

interface PodcastCardProps {
  id: string;
  image: string;
  title: string;
  author: string;
  onClick: (id: string) => void;
}

function PodcastCard({ id, image, title, author, onClick }: PodcastCardProps) {
  return (
    <ButtonBase
      onClick={() => onClick(id)}
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Card
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            borderRadius: 200,
          }}
          image={image}
          alt={`Podcast cover for ${title}`}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>Author: {author}</Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}

export default PodcastCard;
