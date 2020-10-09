import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

import { Container } from './styles';

interface Proops {
  institution_name: string;
  photo_main: string;
  country: string;
  city: string;
  state?: string;
  institution_type: string;
  slug: string;
}

const Card: React.FC<Proops> = proops => {
  return (
    <Container>
      <Fade triggerOnce duration={1500}>
        <div className="card card-body card-header col-md-4">
          <h3 className="card-header">{proops.institution_name}</h3>
          <div>
            <img
              className="card-img-top"
              src={proops.photo_main}
              alt="institution"
            />
          </div>
          <br />
          <p>
            <b>Country: </b>
            &nbsp;
            {proops.country}
            <br />
            <b>City: </b>
            &nbsp;
            {proops.city}
            <br />
            <b>State: </b>
            {proops.state || 'Not defined'}
            <br />
            <b>{proops.institution_type}</b>
          </p>
          <Link to={`/institutions/${proops.slug}`}>View Details</Link>
        </div>
      </Fade>
    </Container>
  );
};

export default Card;
