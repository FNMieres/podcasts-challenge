import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import { Link as RouterLink } from "react-router-dom";

interface HeaderProps {
  isLoading?: boolean;
}

function Header({ isLoading = false }: HeaderProps) {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link component={RouterLink} to="/podcasts" sx={{ display: "flex" }}>
          <PodcastsIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Podcaster
          </Typography>
        </Link>
        {isLoading && <CircularProgress />}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
