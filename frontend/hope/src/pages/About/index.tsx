import React from 'react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';

import { Container } from './styles';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>4_Hope.</h1>
        <p className="text-center">
          We are a proudly nonprofits fundraising organization. responsible for
          the protection of thousands of threatened animal species and
          humanitarian causes helping children in war zones around the world
          supporting the volunteers and Institutions registered in our services.
          The funds collected are divided equally between the Volunteers
          involved responsible in managing the Institutions. Donating monthly
          you are giving smiles to children's faces and contributing for a
          better future.
        </p>
      </Container>
      <Contact />
    </>
  );
};

export default About;
