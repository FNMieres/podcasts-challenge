import { ReactNode } from "react";
import Box from "@mui/material/Box";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface LayoutProps {
  isLoading?: boolean;
  children?: ReactNode;
}

function Layout({ isLoading = false, children }: LayoutProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header isLoading={isLoading} />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}

export default Layout;
