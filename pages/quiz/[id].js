/* eslint-disable react/prop-types */
import React from 'react';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <QuizScreen
      externalQuestions={dbExterno.questions}
      bg={dbExterno.bg}
    />
    /* <pre style={{ color: 'black' }}>
          {JSON.stringify(dbExterno.questions, null, 4)}
        </pre> */
  );
}

export async function getServerSideProps(context) {
  const dbExterno = await fetch('https://alura-quiz-harrypotter.williamdlm.vercel.app/api/db')
    .then((respostadoServer) => {
      if (respostadoServer.ok) {
        return respostadoServer.json();
      }
      throw new Error('falha em pegar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
      console.error(err);
    });

  console.log('dbExterno: ', dbExterno);
  return {
    props: {
      dbExterno,
    },
  };
}
