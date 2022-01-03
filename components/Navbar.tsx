import { Box, Button, Container, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Box bg="black" color="white" as="nav" py={4}>
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <NextLink href="/" passHref>
              <Link mr={4}>Dashboard</Link>
            </NextLink>
            <NextLink href="/community" passHref>
              <Link>Community</Link>
            </NextLink>
          </Box>
          <Button color="black">Sign out</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
