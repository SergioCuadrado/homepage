import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="MyAnimeList">
      <Container>
        <Title>
          RickAndMorty <Badge>2021</Badge>
        </Title>
        <P>
          A search engine for Rick and Morty characters and add to favourites.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/SergioCuadrado/ReactHooks-RickAndMorty">
              https://github.com/SergioCuadrado/ReactHooks-RickAndMorty{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, CSS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/thumbRickandMorty.png" alt="TaskList" />
      </Container>
    </Layout>
  );
};

export default Work;
