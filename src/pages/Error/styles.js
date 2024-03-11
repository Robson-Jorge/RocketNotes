import styled from 'styled-components'
import { fadeIn } from '../../styles/animate'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: #011631; */
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;

  height: 100vh;
  margin: 0 auto;
  padding-bottom: 15px;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;

    margin-top: 20px;
    background: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border: none;

    padding: 8px 16px;
    border-radius: 8px;

    font-weight: 500;
    font-size: 18px;

    cursor: pointer;
  }

  p {
    max-width: 400px;
    text-align: center;
    margin-top: 10px;
  }
`
