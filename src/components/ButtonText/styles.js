import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  border: none;
  font-size: 16px;
  text-transform: capitalize;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    transform: scale(1.1);
  }
`
