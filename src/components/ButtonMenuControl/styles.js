import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  border: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > svg:hover {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`
