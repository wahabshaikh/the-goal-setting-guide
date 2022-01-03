import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box as="main" py={4}>
        <Container maxW="container.xl">{children}</Container>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
