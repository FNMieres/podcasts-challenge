import { Outlet } from "react-router-dom";
import { Layout } from "../components/Layout";
import usePodcasts from "../features/podcasts/podcastsHooks";

function Root() {
  const { isLoadingPodcasts } = usePodcasts();

  return (
    <Layout isLoading={isLoadingPodcasts}>
      <Outlet />
    </Layout>
  );
}

export default Root;
