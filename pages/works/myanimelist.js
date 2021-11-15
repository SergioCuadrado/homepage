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
          myAnimeList <Badge>2021</Badge>
        </Title>
        <P>
          Search for all existing anime and save your favourite anime in your
          anime list by creating a user with an encrypted password.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://myanimelist-sergio.netlify.app/">
              https://myanimelist-sergio.netlify.app/{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, NodeJS, MySQL, Webpack</span>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/SergioCuadrado/MyAnimeList">
              https://github.com/SergioCuadrado/MyAnimeList{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/thumbmyAnimeList_01.png" alt="myAnimeList" />
        <WorkImage src="/images/thumbmyAnimeList_02.png" alt="myAnimeList" />
      </Container>
    </Layout>
  );
};

export default Work;
