import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: vertical;

  &::-webkit-resizer {
    border-color: ${({ theme }) => theme.COLORS.GRAY_100};
    border-style: solid;
    border-top-width: 0;
    border-bottom-width: 2px;
    border-right-width: 2px;
    border-left-width: 0;
  }

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
