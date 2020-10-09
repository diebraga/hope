import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  display: flex;
  align-items: stretch;
  flex-direction: column;
  align-items: center;
  place-content: center;

  div {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    place-content: center;

    h1 {
      margin-left: 15px;
    }

    h4 {
      margin-left: 50px;
    }
  }

  .text-center {
    position: absolute;
  }

  a {
    text-decoration: none;
  }
`;
