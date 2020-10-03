import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface Proops {
  institution_name: string;
  photo_main: string;
  country: string;
  city: string;
  state: string;
  institution_type: string;
  zipcode: string;
  slug: string;
}

const Card: React.FC<Proops> = proops => {
  const numberWithCommas = (x: any): any => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Container>
      <div className="card">
        <h3 className="">{proops.institution_name}</h3>
        <div className="">
          <img className="" src={proops.photo_main} alt="House" />
        </div>
        <p className="">
          {proops.country},{proops.city},{proops.state}
        </p>
        <div className="">
          <div className="">
            <p className="">{proops.zipcode}</p>
            <p className="">{proops.institution_type}</p>
          </div>
        </div>
        <Link className="" to={`/institutions/${proops.slug}`}>
          View Institutions
        </Link>
      </div>
    </Container>
  );
};

export default Card;
