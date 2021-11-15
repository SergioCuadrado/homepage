import Head from "next/head";
import Navbar from "../navbar";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Sergio Mañoso - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
