import { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const LazyRoot = lazy(() => import("../pages/Root"));
const LazyPodcastsPage = lazy(() => import("../pages/PodcastsPage"));
const LazyPodcastPage = lazy(() => import("../pages/PodcastPage"));
const LazyEpisodesPage = lazy(() => import("../pages/EpisodesPage"));
const LazyEpisodePage = lazy(() => import("../pages/EpisodePage"));

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
        element: (
          <Suspense>
            <LazyRoot />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense>
                <LazyPodcastsPage />
              </Suspense>
            ),
          },
          {
            path: ":podcastId",
            element: (
              <Suspense>
                <LazyPodcastPage />
              </Suspense>
            ),
            children: [
              {
                index: true,
                element: (
                  <Suspense>
                    <LazyEpisodesPage />
                  </Suspense>
                ),
              },
              {
                path: "episodes/:episodeId",
                element: (
                  <Suspense>
                    <LazyEpisodePage />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
