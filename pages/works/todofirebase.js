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
          ToDo-Firebase <Badge>2021</Badge>
        </Title>
        <P>
          It is a firebase application that you can:
          <br /> - Create the tasks you want.
          <br /> - Mark the tasks you have already completed.
          <br /> - Uncheck the tasks you thought you had finished.
          <br /> - Delete the task you want.
          <br /> - Switch from dark to light mode.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, TypeScript, Firebase, styled-components</span>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/SergioCuadrado/ToDoList-firebase">
              https://github.com/SergioCuadrado/ToDoList-firebase{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage
          src="/images/thumbTodoFirebase_01.png"
          alt="ToDo with Firebase"
        />
        <WorkImage
          src="/images/thumbTodoFirebase_02.png"
          alt="ToDo with Firebase"
        />
        <WorkImage
          src="/images/thumbTodoFirebase_03.png"
          alt="ToDo with Firebase"
        />
      </Container>
    </Layout>
  );
};

export default Work;
