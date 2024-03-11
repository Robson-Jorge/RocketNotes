import styled from 'styled-components'

export const Container = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }
  .title {
    width: 70%;
    font-size: 36px;
    margin-top: 64px;
  }

  .paragraph {
    margin-top: 10px;
    line-height: 1.6;
  }

  .tags {
    width: 80px;
    line-height: 1.6;
    margin-right: 15px;
  }
`
