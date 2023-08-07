import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Link component={RouterLink} to="/" sx={{ display: "flex" }}>
          <PodcastsIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Podcaster
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
