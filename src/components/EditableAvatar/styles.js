import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  & > div:nth-child(1) {
    position: relative;
    margin: -124px auto 20px;
    width: 186px;
    height: 186px;

    > img {
      width: 100%;
      border-radius: 50%;
    }

    > label {
      width: 48px;
      height: 48px;

      background: ${({ theme }) => theme.COLORS.ORANGE};
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      bottom: 7px;
      right: 7px;

      cursor: pointer;

      svg {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      }
    }

    input {
      display: none;
    }
  }

  & > div canvas {
    border-radius: 50%;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 5px 10px;

  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  > svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  > input {
    cursor: pointer;
  }
`
