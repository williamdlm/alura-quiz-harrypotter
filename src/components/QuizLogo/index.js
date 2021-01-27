import styled from 'styled-components';

const QuizLogo = styled.div`
  width: 12.5em;
  height: 9.375em;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  margin: 0 13%;
  @media screen and (max-width: 500px) {
    &:after {
      content: "";
      background-size: cover;
      background-position: center;}
  }
`;

export default QuizLogo;
