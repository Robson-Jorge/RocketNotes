import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  border: none;
  font-size: 14px;
  margin-top: 5px;

  display: flex;
  align-self: flex-end;
  width: max-content;
  gap: 8px;

  &:hover {
    color: ${({ theme }) => theme.COLORS.RED};
  }
`
