import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  place-content: center;
  place-items: center;
`;

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  place-items: center;
  width: 100%;
  max-width: 700px;

  animation: ${appearFromBottom} 1s;

  img {
    max-width: 200px;
  }

  strong {
    font-family: 'Medula One', sans-serif;
    font-size: 5em;
    opacity: 0.9;
    color: whitesmoke;
  }

  sub {
    font-family: 'Medula One', sans-serif;
    font-size: 1em;
    letter-spacing: 0.1em;
    opacity: 0.7;
    color: whitesmoke;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.3, '#f4ede8')};
      }
    }
  }

  > a {
    color: #f4ede8;
    display: block;
    transition: color 0.2s;
    margin-bottom: 44px;
    display: flex;
    align-items: center;
    text-decoration: none;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.3, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
