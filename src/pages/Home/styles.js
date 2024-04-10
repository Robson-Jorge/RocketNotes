import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { fadeInUp, fadeInLeft } from '../../styles/animate'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'newnote content';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  @media (max-width: 680px) {
    grid-template-columns: ${({ isOpen }) =>
      isOpen === false ? '0 1fr' : '1fr 0'};
    ${({ isOpen }) =>
      isOpen === false &&
      `
    > ${Menu}, ${Brand}, ${NewNote} {
      visibility: hidden;
      position: absolute;
      inset: 0;
      opacity: 0;
      animation: 0.8s fadeInLeft ease-in-out 0.1s forwards;
    }
  `}

    ${({ isOpen }) =>
      isOpen === true &&
      `
    > header, ${Content}, ${Search} {
      visibility: hidden;
      position: absolute;
      right: 100%;
      opacity: 0;
    }`}
  }
`

export const Brand = styled.div`
  grid-area: brand;

  opacity: 0;
  animation: 0.8s ${fadeInLeft} ease-in-out 0.1s forwards;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (min-width: 680px) {
    justify-content: center;

    > button {
      display: none;
    }
  }
`
export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  overflow-y: auto;

  opacity: 0;
  animation: 0.8s ${fadeInLeft} ease-in-out 0.1s forwards;

  padding-top: 64px;
  text-align: center;

  > li {
    margin-bottom: 24px;
  }
`

export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;

  @media (max-width: 480px) {
    padding: 32px 32px 0;
  }
`

export const Content = styled.div`
  grid-area: content;

  padding: 0 64px;
  overflow-y: auto;

  > section {
    opacity: 0;
    animation: 0.8s ${fadeInUp} ease-in-out 0.1s forwards;
    position: relative;

    > button:nth-child(2) {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  @media (max-width: 680px) {
    padding: 0 32px;

    > section {
      > h2 {
        text-align: end;
      }

      > button:nth-child(2) {
        display: block;
      }
    }
  }
`

export const NewNote = styled(Link)`
  grid-area: newnote;

  opacity: 0;
  animation: 0.8s ${fadeInLeft} ease-in-out 0.1s forwards;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 8px;
  }
`
