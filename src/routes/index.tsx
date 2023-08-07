import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import PodcastsRoute from "./podcasts";

const Root = lazy(() => import("./root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<CircularProgress />}>
        <Root />
      </Suspense>
    ),
    children: [
      {
        path: "/podcasts",
        element: <PodcastsRoute />,
      },
    ],
  },
]);

export default router;
