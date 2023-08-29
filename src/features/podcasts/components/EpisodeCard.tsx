/* eslint-disable jsx-a11y/media-has-caption */
import { Box, Divider, Paper, Typography } from "@mui/material";

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
