import styled from 'styled-components'
import { emerge } from '../../styles/animate'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;

    > div {
      max-width: 550px;

      opacity: 0;
      animation: 1s ${emerge} ease-in-out forwards;

      margin: 0 auto;
      width: 100%;
      position: relative;

      > p img {
        max-width: 100%;
        margin: 0 auto;
        padding: 0 50px;
      }
    }

    .cancel-button {
      position: absolute;
      right: 0;
      top: -40px;
      font-size: 18px;
      transition: 0.2s ease-in-out;
    }

    .cancel-button:hover {
      color: ${({ theme }) => theme.COLORS.ORANGE};
      transform: scale(1.1);
    }
  }

  @media (max-width: 648px) {
    > main div {
      max-width: 425px;
    }
  }

  @media (max-width: 480px) {
    > main {
      padding: 32px 0;

      > div {
        max-width: 375px;
        padding: 0 20px;
      }
    }
  }
`

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;
    word-wrap: break-word;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > li:hover {
    a {
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }
`

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    align-self: end;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    margin-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }

  @media (max-width: 648px) {
    > h1 {
      font-size: 32px;
    }
  }
`
