import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Entry } from "../../../types/Contents";

interface PodcastCardProps {
  data: Entry;
  onClick: (id: string) => void;
}

function PodcastCard({ data, onClick }: PodcastCardProps) {
  return (
    <ButtonBase
      onClick={() => onClick(data.id.attributes["im:id"])}
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
          component="div"
          sx={{
            pt: "100%",
            borderRadius: 200,
          }}
          image={data["im:image"][2].label}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {data["im:name"].label}
          </Typography>
          <Typography>Author: {data["im:artist"].label}</Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}

export default PodcastCard;
