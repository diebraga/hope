import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  width: 100%;
  height: 80%;
  margin: 0;
  padding: 0;

  display: flex;
  align-items: stretch;
  flex-direction: column;
  align-items: center;
  place-content: center;

  .text-center {
    position: absolute;

    input {
      margin-top: 5px;
    }

    button {
      margin-top: 10px;
    }
  }

  a {
    text-decoration: none;
  }
`;
