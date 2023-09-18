import { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  EPISODES_PATH,
  EPISODE_ID_PATH_PARAM,
  HOME_PATH,
  PODCASTS_PATH,
  PODCAST_ID_PATH_PARAM,
} from "../constants";

const LazyRoot = lazy(() => import("../pages/Root"));
const LazyPodcastsPage = lazy(() => import("../pages/PodcastsPage"));
const LazyPodcastPage = lazy(() => import("../pages/PodcastPage"));
const LazyEpisodesPage = lazy(() => import("../pages/EpisodesPage"));
const LazyEpisodePage = lazy(() => import("../pages/EpisodePage"));

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    children: [
      {
        index: true,
        element: <Navigate to={PODCASTS_PATH} />,
      },
      {
        path: PODCASTS_PATH,
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
            path: PODCAST_ID_PATH_PARAM,
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
                path: `${EPISODES_PATH}/${EPISODE_ID_PATH_PARAM}`,
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
