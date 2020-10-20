import React from 'react';
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';
import { Fade } from 'react-awesome-reveal';
import Animation from '../../components/Animation';

import { Container } from './styles';

const Wellcome: React.FC = () => {
  return (
    <>
      <Container>
        <Animation />
        <Fade direction="left" triggerOnce duration={1500}>
          <div>
            <h1>&nbsp; Wellcome to 4_Hope.</h1>
            <br />
            <br />
            <Link to="/about">
              <h1>
                About
                <FiCornerDownRight />
              </h1>
            </Link>
            <Link to="/signup">
              <h1>
                Register
                <FiCornerDownRight />
              </h1>
            </Link>
            <br />
            <br />
            <Link to="/signin">
              <h4>
                Explore Website
                <FiCornerDownRight />
              </h4>
            </Link>
            <Link to="/search">
              <h4>
                Find
                <FiCornerDownRight />
              </h4>
            </Link>
            <Link to="/donation">
              <h4>
                Donate
                <FiCornerDownRight />
              </h4>
            </Link>
          </div>
        </Fade>
      </Container>
    </>
  );
};

export default Wellcome;
