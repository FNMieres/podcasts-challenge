import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import PodcastsPage from "../pages/PodcastsPage";
import PodcastPage from "../pages/PodcastPage";
import EpisodesPage from "../pages/EpisodesPage";
import EpisodePage from "../pages/EpisodePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "podcasts",
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
