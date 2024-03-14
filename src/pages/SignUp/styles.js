import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'
import { fadeInRight } from '../../styles/animate'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  overflow: hidden;

  @media (max-width: 980px) {
    justify-content: center;
  }
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  opacity: 0;
  animation: ${fadeInRight} 1s ease-in-out 0.2s forwards;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (max-width: 480px) {
    padding: 0 48px;

    > a {
      margin-top: 48px;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;

  opacity: 0;
  animation: ${fadeInRight} 1s ease-in-out forwards;

  @media (max-width: 980px) {
    display: none;
  }
`
