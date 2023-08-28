import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import PodcastsPage from "../pages/PodcastsPage";
import PodcastPage from "../pages/PodcastPage";

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
          },
        ],
      },
    ],
  },
]);

export default router;
