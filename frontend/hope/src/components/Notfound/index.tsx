import React from 'react';

import { Container } from './styles';

const Notfound: React.FC = () => {
  return (
    <Container>
      <h1>404 Not Found</h1>
      <p>The link requested does not exist in our website.</p>
    </Container>
  );
};

export default Notfound;
