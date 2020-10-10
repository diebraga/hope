import styled from 'styled-components';

export const Volunteer = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  align-items: center;
  place-content: center;

  p {
    width: 300px;
    margin: 3px;
  }

  a {
    text-decoration: none;
    font-size: 20px;
  }

  img {
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      box-shadow: 5px 5px 15px rgba(1, 1, 1, 0.6);
    }
  }

  h3,
  p {
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Institution = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  align-items: center;
  place-content: center;

  p {
    width: 300px;
    margin: 3px;
  }

  img {
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    }
  }

  h2,
  p {
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Media = styled.div`
  background: black;

  img {
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    }
  }
`;
