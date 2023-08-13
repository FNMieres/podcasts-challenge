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
          <PodcastsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Podcaster
          </Typography>
        </Link>
        {isLoading && <CircularProgress />}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
