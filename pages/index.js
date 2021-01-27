import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Head from '../src/components/Head';
import QuizLogo from '../src/components/QuizLogo';

// const BackgroundImage = styled.div `
// background-image: url(${db.bg});
//     flex: auto;
//     background-size: cover;
//     background-position: center;
// `

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 5px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head />
      <QuizLogo backgroundImage="https://res.cloudinary.com/dhmkfekt2/image/upload/v1611711939/logo_gkgnd6.svg" />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Harry Potter</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log(document.getElementById('inputName').value);

              // router manda para a proxma pagina
            }}
            >
              <input
                id="inputName"
                onChange={function (event) {
                  setName(event.target.value);
                }}
                placeholder="Fala ai o seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Officia elit anim qui exercitation do in.</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/williamdlm/alura-quiz-harrypotter" />
    </QuizBackground>
  );
}
