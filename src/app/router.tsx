import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import PodcastsPage from "../pages/PodcastsPage";
import Root from "../pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigate to="podcasts" />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "podcasts",
        element: <Root />,
        children: [
          {
            index: true,
            element: <PodcastsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
