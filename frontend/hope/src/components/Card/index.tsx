import React from 'react';
import { Link } from 'react-router-dom';

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
  const numberWithCommas = (x: any): any => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Container>
      <div className="card card-body col-md-4">
        <h3>{proops.institution_name}</h3>
        <div>
          <img className="card-img-top" src={proops.photo_main} alt="House" />
        </div>
        <br />
        <p>
          <b>Country: </b>&nbsp;{proops.country}
          <br />
          <b>City: </b>&nbsp;{proops.city}
          <br />
          <b>State: </b>{proops.state || 'Not defined'}
          <br />

          <b>{proops.institution_type}</b>
        </p>
        <Link to={`/institutions/${proops.slug}`}>View Institutions</Link>
      </div>
    </Container>
  );
};

export default Card;
