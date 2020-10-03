import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 7px;

  svg {
    margin-bottom: 7px;
  }

  button {
    margin: auto;
  }

  .row {
    margin: auto;
  }

  @media (max-width: 576px) {
    .hide {
      display: none;
    }
  }

  @media (min-width: 576px) {
    .show {
      display: none;
    }
  }
`;
