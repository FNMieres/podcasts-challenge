import { Outlet } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useAppLoader } from "../app/hooks";

function Root() {
  const isLoading = useAppLoader();

  return (
    <Layout isLoading={isLoading}>
      <Outlet />
    </Layout>
  );
}

export default Root;
