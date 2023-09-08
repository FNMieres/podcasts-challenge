import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import RouterLink from "../RouterLink/RouterLink";

interface HeaderProps {
  isLoading?: boolean;
}

function Header({ isLoading = false }: HeaderProps) {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <RouterLink to="/podcasts" sx={{ display: "flex" }} underline="none">
          <PodcastsIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
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
        </RouterLink>
        {isLoading && <CircularProgress />}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
