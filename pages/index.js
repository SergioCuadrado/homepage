import NextLink from "next/link";
import {
  Link,
  Button,
  Container,
  Box,
  Heading,
  Image,
  SimpleGrid,
  useColorModeValue,
  List,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import { GridItem } from "../components/grid-items";
import { IoLogoGithub } from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer Junior
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Sergio Mañoso
            </Heading>
            <p>Web developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/sergio.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Sergio is a full-stack developer Junior based in Girona with a
            passion for building websites and how they work / stuff he wants. He
            has a love for everything related to website management and data
            management. When I'm not programming what I love are video games
            (especially fighting games) and doing sports (Crossfit ❤).
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Extremadura, Spain.
          </BioSection>
          <BioSection>
            <BioYear>2011 - 2015</BioYear>
            High School
          </BioSection>
          <BioSection>
            <BioYear>2015 - 2017</BioYear>
            Intermediate level training cycle - Microcomputer Systems and
            Network Technician
          </BioSection>
          <BioSection>
            <BioYear>2017 - 2019</BioYear>
            Higher level training cycle - Cross-platform application development
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            courses I have taken online at{" "}
            <Link href="https://platzi.com/p/sergiomc07/">Platzi</Link>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          <Paragraph>Videogames, Music, Anime, Chess</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/SergioCuadrado" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @SergioCuadrado
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
