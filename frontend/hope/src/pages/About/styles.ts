import styled from 'styled-components';
import Child from '../../assets/child.jpg';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: black;
  color: white;

  h1 {
    margin-top: 40px;
  }
  p {
    margin-top: 20px;
    margin-bottom: 40px;
    max-width: 80%;
  }
  @media (max-width: 400px) {
    flex: 1;
    background: url(${Child}) no-repeat center;
  }

  @media (min-width: 900px) {
    p {
      max-width: 40%;
    }
  }
`;
