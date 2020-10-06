import React from 'react';
import Card from '../Card';

const institutions = ({ institutions }) => {
  const getInstitutions = () => {
    const institutionsOnPage = [];
    const result = [];

    institutions.map(institution => {
      return institutionsOnPage.push(
        <Card
          institution_name={institution.institution_name}
          country={institution.country}
          city={institution.city}
          state={institution.state}
          zipcode={institution.zipcode}
          institution_type={institution.institution_type}
          photo_main={institution.photo_main}
          slug={institution.slug}
        />,
      );
    });

    for (let i = 0; i < institutions.length; i += 3) {
      result.push(
        <div>
          <div>{institutionsOnPage[i]}</div>
          <div>
            {institutionsOnPage[i + 1] ? institutionsOnPage[i + 1] : null}
          </div>
          <div>
            {institutionsOnPage[i + 2] ? institutionsOnPage[i + 2] : null}
          </div>
        </div>,
      );
    }

    return result;
  };

  return (
      <div>
          {getInstitutions()}
      </div>
  );
}

export default institutions;
