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
          TaskList <Badge>2021</Badge>
        </Title>
        <P>List of tasks by storing the tasks in the localStorage</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/SergioCuadrado/Task-list-localStorageJS">
              https://github.com/SergioCuadrado/Task-list-localStorageJS{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, Bootstrap, JavaScript </span>
          </ListItem>
        </List>

        <WorkImage src="/images/thumbTodo.png" alt="TaskList" />
      </Container>
    </Layout>
  );
};

export default Work;
