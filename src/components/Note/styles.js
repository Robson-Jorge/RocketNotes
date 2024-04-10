import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;
  position: relative;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
    overflow-x: auto;

    > span {
      margin-bottom: 8px;
    }
  }

  > button {
    position: absolute;
    right: 15px;
    top: 8px;
  }

  @media (min-width: 768px) {
    > h1 {
      font-size: 20px;
    }

    > svg {
      right: 25px;
      top: 20px;
    }
  }
`
