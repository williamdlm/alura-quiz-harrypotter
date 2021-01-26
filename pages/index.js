import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import Head from "../src/components/Head";

// const BackgroundImage = styled.div `
// background-image: url(${db.bg});
//     flex: auto;
//     background-size: cover;
//     background-position: center;
// `

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Harry Potter</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Officia elit anim qui exercitation do in.</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Harry Potter</h1>

            <p>Officia elit anim qui exercitation do in.</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/williamdlm/alura-quiz-harrypotter" />
    </QuizBackground>
  );
}
