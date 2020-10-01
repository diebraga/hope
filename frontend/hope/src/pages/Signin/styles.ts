import styled from 'styled-components';
import Background from '../../assets/back.jpg';

export const Container = styled.div`
  background: url(${Background}) no-repeat center;
  padding-top: 30px;

  display: flex;
  align-items: stretch;
  flex-direction: column;
  align-items: center;
  place-content: center;
  margin-top: 40px;

  input {
    margin-top: 5px;
  }

  button {
    margin-top: 10px;
  }
`;
