import { Box, Container, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4}>
      <Container centerContent>
        Made with ♥️ by{" "}
        <Link href="http://twitter.com/wahabshaikh_" isExternal>
          Wahab Shaikh
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;
