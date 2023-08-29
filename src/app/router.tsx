import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../pages/Root";
import PodcastsPage from "../pages/PodcastsPage";
import PodcastPage from "../pages/PodcastPage";
import EpisodesPage from "../pages/EpisodesPage";
import EpisodePage from "../pages/EpisodePage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to="/podcasts" />,
      },
      {
        path: "podcasts",
        element: <Root />,
        children: [
          {
            index: true,
            element: <PodcastsPage />,
          },
          {
            path: ":podcastId",
            element: <PodcastPage />,
            children: [
              {
                index: true,
                element: <EpisodesPage />,
              },
              {
                path: "episodes/:episodeId",
                element: <EpisodePage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
