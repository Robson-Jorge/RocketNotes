import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #3e3b47;

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }

  .title {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.4;
    color: white;
  }

  .tags {
    width: 80px;
    line-height: 1.6;
    margin-right: 15px;
  }
`
