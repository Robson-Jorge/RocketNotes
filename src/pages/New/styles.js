import styled from 'styled-components'
import { emerge, pulse } from '../../styles/animate'

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
    overflow-y: auto;

    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      opacity: 0;
      animation: 1s ${pulse} ease-in-out forwards;

      max-width: 550px;
      margin: 38px auto 0;
    }

    > form {
      opacity: 0;
      animation: 1s ${emerge} ease-in-out forwards;
    }

    @media (max-width: 680px) {
      padding: 32px;
    }
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
