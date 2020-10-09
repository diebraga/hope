import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';

const InstitutionDetail = props => {
  const [institution, setInstitution] = useState({});
  const [volunteer, setVolunteer] = useState({});

  useEffect(() => {
    const slug = props.match.params.id;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    axios
      .get(`http://127.0.0.1:8000/api/institutions/${slug}`, config)
      .then(res => {
        setInstitution(res.data);
      })
      .catch(err => {
        console.error('Error connecting API', err.message);
      });
  }, [props.match.params.id]);

  useEffect(() => {
    const id = institution.volunteer;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    if (id) {
      axios
        .get(`http://127.0.0.1:8000/api/volunteers/${id}`, config)
        .then(res => {
          setVolunteer(res.data);
        })
        .catch(err => {
          console.error('Error connecting API', err.message);
        });
    }
  }, institution.volunteer);

  const displayInteriorImages = () => {
    const images = [];

    images.push(
      <div key={1} className=''>
          <div className=''>
              {
                  institution.photo_1 ? (
                      <div className=''>
                          <img className='' src={institution.photo_1} alt='' />
                      </div>
                  ) : null
              }
          </div>
          <div className=''>
              {
                  institution.photo_2 ? (
                      <div className=''>
                          <img className='' src={institution.photo_2} alt='' />
                      </div>
                  ) : null
              }
          </div>
          <div className=''>
              {
                  institution.photo_3 ? (
                      <div className=''>
                          <img className='' src={institution.photo_3} alt='' />
                      </div>
                  ) : null
              }
          </div>
      </div>
  );

  images.push(
      <div key={2} className=''>
          <div className=''>
              {
                  institution.photo_4 ? (
                      <div className=''>
                          <img className='' src={institution.photo_4} alt='' />
                      </div>
                  ) : null
              }
          </div>
          <div className=''>
              {
                  institution.photo_5 ? (
                      <div className=''>
                          <img className='' src={institution.photo_5} alt='' />
                      </div>
                  ) : null
              }
          </div>
          <div className=''>
              {
                  institution.photo_6 ? (
                      <div className=''>
                          <img className='' src={institution.photo_6} alt='' />
                      </div>
                  ) : null
              }
          </div>
      </div>
  );

  images.push(
      <div key={3} className=''>
          <div className=''>
              {
                  institution.photo_7 ? (
                      <div className=''>
                          <img className='' src={institution.photo_7} alt='' />
                      </div>
                  ) : null
              }
          </div>
          <div className=''>
              {
                  institution.photo_8 ? (
                      <div className=''>
                          <img className='' src={institution.photo_8} alt='' />
                      </div>
                  ) : null
              }
          </div>
          <div className=''>
              {
                  institution.photo_9 ? (
                      <div className=''>
                          <img className='' src={institution.photo_9} alt='' />
                      </div>
                  ) : null
              }
          </div>
      </div>
  );

  images.push(
      <div key={4} className=''>
          <div className=''>
              {
                  institution.photo_10 ? (
                      <div className=''>
                          <img className='' src={institution.photo_10} alt='' />
                      </div>
                  ) : null
              }
          </div>
          <div className=''>
              {
                  institution.photo_12 ? (
                      <div className=''>
                          <img className='' src={institution.photo_11} alt='' />
                      </div>
                  ) : null
              }
          </div>
          <div className=''>
              {
                  institution.photo_12 ? (
                      <div className=''>
                          <img className='' src={institution.photo_12} alt='' />
                      </div>
                  ) : null
              }
          </div>
      </div>
  );

  images.push(
      <div key={5} className=''>
          <div className=''>
              {
                  institution.photo_13 ? (
                      <div className=''>
                          <img className='' src={institution.photo_13} alt='' />
                      </div>
                  ) : null
              }
          </div>
          <div className=''>
              {
                  institution.photo_14 ? (
                      <div className=''>
                          <img className='' src={institution.photo_14} alt='' />
                      </div>
                  ) : null
              }
          </div>
          <div className=''>
              {
                  institution.photo_15 ? (
                      <div className=''>
                          <img className='' src={institution.photo_15} alt='' />
                      </div>
                  ) : null
              }
          </div>
      </div>
  );

  images.push(
      <div key={6} className=''>
          <div className=''>
              {
                  institution.photo_16 ? (
                      <div className=''>
                          <img className='' src={institution.photo_16} alt='' />
                      </div>
                  ) : null
              }
          </div>
          <div className=''>
              {
                  institution.photo_17 ? (
                      <div className=''>
                          <img className='' src={institution.photo_17} alt='' />
                      </div>
                  ) : null
              }
          </div>
          <div className=''>
              {
                  institution.photo_18 ? (
                      <div className=''>
                          <img className='' src={institution.photo_18} alt='' />
                      </div>
                  ) : null
              }
          </div>
      </div>
  );

  images.push(
      <div key={7} className=''>
          <div className=''>
              {
                  institution.photo_19 ? (
                      <div className=''>
                          <img className='' src={institution.photo_19} alt='' />
                      </div>
                  ) : null
              }
          </div>
          <div className=''>
              {
                  institution.photo_20 ? (
                      <div className=''>
                          <img className='' src={institution.photo_20} alt='' />
                      </div>
                  ) : null
              }
          </div>
          <div className=''></div>
      </div>
  );

  return images;
};

return (
  <div className=''>
      <Helmet>
          <title>4_Hope - Institution | {`${institution.title}`}</title>
          <meta
              name='description'
              content='Institution detail'
          />
      </Helmet>
      <div className=''>
          <h1 className=''>{institution.institution_name}</h1>
      </div>
      <div className=''>
          <div className=''>
              <div className=''>
                  <img className='' src={institution.photo_main} alt='' />
              </div>
          </div>
          <div className=''>
              <div className=''>
                  <img className='' src={volunteer.photo} alt='' />
              </div>
              <h3 className=''>{volunteer.name}</h3>
              <p className=''>Age: {volunteer.age}</p>
              <p className=''>Phone: {volunteer.phone}</p>
              <p className=''>Email: {volunteer.email}</p>
              <p className=''>Degree: {volunteer.degree || '-'}</p>
              <p className=''>About: {volunteer.experience_volunteering || '-'}</p>
          </div>
      </div>
      <div className=''>
          <p>
            Country: {institution.country}
          </p>
          <p>
            Country: {institution.city}
          </p>
          <p>
            State: {institution.state || '-'}
          </p>
          <p>
            Zipcode: {institution.zipcode}
          </p>
          <p className=''>About: {institution.description || '-'}</p>
      </div>
      {displayInteriorImages()}
  </div>
);
};

export default InstitutionDetail;
