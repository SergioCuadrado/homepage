import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-items";
import Layout from "../components/layouts/article";

import thumbMyanimelist from "../public/images/thumbMyanimelist.png";
import thumbTaskList from "../public/images/thumbTodo.png";
import thumbRickandMorty from "../public/images/thumbRickandMorty.png";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="myanimelist"
              title="MyAnimeList"
              thumbnail={thumbMyanimelist}
            >
              Website to search for the anime you like and save it to your user.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="tasklist"
              title="TaskList-LocalStorageJS"
              thumbnail={thumbTaskList}
            >
              List of tasks made with JavaScript storing the information in the
              localStorage
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="rickandmorty"
              title="RickAndMortySearch"
              thumbnail={thumbRickandMorty}
            >
              A search engine for Rick and Morty characters and add to
              favourites.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
