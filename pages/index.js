import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Head from '../src/components/Head';
import Input from '../src/components/Input';
import QuizLogo from '../src/components/QuizLogo';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

// const BackgroundImage = styled.div `
// background-image: url(${db.bg});
//     flex: auto;
//     background-size: cover;
//     background-position: center;
// `

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head />
      <QuizContainer>
        <QuizLogo backgroundImage="https://res.cloudinary.com/dhmkfekt2/image/upload/v1611711939/logo_gkgnd6.svg" />
        <Widget>
          <Widget.Header>
            <h1>#HarryPotterQuiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log(document.getElementById('inputName').value);

              // router manda para a proxma pagina
            }}
            >
              <Input
                id="inputName"
                name="nomeDoUsuario"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Fala ai o seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, gitHubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');
                return (
                  <li key={linkExterno}>
                    <Widget.Topic href={linkExterno}>
                      {`${gitHubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/williamdlm/alura-quiz-harrypotter" />
    </QuizBackground>
  );
}
