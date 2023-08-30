/* eslint-disable jsx-a11y/media-has-caption */
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface EpisodeCardProps {
  title: string;
  description: string;
  audioSrc: string;
  audioType: string;
}

function EpisodeCard({
  title,
  description,
  audioSrc,
  audioType,
}: EpisodeCardProps) {
  return (
    <Paper>
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="h4" component="h1">
          {title}
        </Typography>
        <Typography gutterBottom>{description}</Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ p: 2 }}>
        <audio controls style={{ width: "100%" }}>
          <source src={audioSrc} type={audioType} />
        </audio>
      </Box>
    </Paper>
  );
}

export default EpisodeCard;
