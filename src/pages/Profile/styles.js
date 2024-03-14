import styled from 'styled-components'
import { fadeInLeft, fadeInUp, pulse } from '../../styles/animate'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 124px;

    button {
      background: none;
      border: none;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    > header {
      padding: 0 32px;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 340px;
  margin: 30px auto 0;

  > div {
    animation: 0.8s ${fadeInLeft} ease-in-out forwards;
    opacity: 0;
  }

  > div:nth-child(1) {
    animation: 0.8s ${pulse} ease-in-out 0.1s forwards;
  }

  > div:nth-child(2) {
    animation-delay: 0.2s;
  }

  > div:nth-child(3) {
    animation-delay: 0.3s;
  }

  > div:nth-child(4) {
    margin-top: 24px;
    animation-delay: 0.4s;
  }

  > div:nth-child(5) {
    animation-delay: 0.5s;
  }

  > button {
    opacity: 0;
    animation: 0.8s ${fadeInUp} ease-in-out 0.5s forwards;
  }

  @media (max-width: 768px) {
    margin: 30px 32px 0;
  }
`
