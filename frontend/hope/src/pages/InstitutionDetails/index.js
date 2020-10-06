import React, { useState, useEffect, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const InstitutionDetails = (props) => {
  const [institution, setInstitution] = useState({});
  const [vonlunteer, setvonlunteer] = useState({});

  const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
      const slug = props.match.params.id;

      const config = {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      };

      axios.get(`http://127.0.0.1:8000/api/institutions/${slug}`, config)
      .then(res => {
          setInstitution(res.data);
      })
      .catch(err => {

      });
  }, [props.match.params.id]);

  useEffect(() => {
      const id = institution.vonlunteer;

      const config = {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      };

      if (id) {
          axios.get(`http://127.0.0.1:8000/api/volunteers/${id}`, config)
          .then(res => {
            setvonlunteer(res.data);
          })
          .catch(err => {

          });
      }
  }, [institution.vonlunteer]);

  const displayInteriorImages = () => {
      let images = [];

      images.push(
          <div key={1} className=''>
              <div className='col-1-of-3'>
                  {
                      institution.photo_1 ? (
                          <div className=''>
                              <img className='' src={institution.photo_1} alt='' />
                          </div>
                      ) : null
                  }
              </div>
              <div className='col-1-of-3'>
                  {
                      institution.photo_2 ? (
                          <div className=''>
                              <img className='' src={institution.photo_2} alt='' />
                          </div>
                      ) : null
                  }
              </div>
              <div className='col-1-of-3'>
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
              <div className='col-1-of-3'>
                  {
                      institution.photo_4 ? (
                          <div className=''>
                              <img className='' src={institution.photo_4} alt='' />
                          </div>
                      ) : null
                  }
              </div>
              <div className='col-1-of-3'>
                  {
                      institution.photo_5 ? (
                          <div className=''>
                              <img className='' src={institution.photo_5} alt='' />
                          </div>
                      ) : null
                  }
              </div>
              <div className='col-1-of-3'>
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
              <div className='col-1-of-3'>
                  {
                      institution.photo_7 ? (
                          <div className=''>
                              <img className='' src={institution.photo_7} alt='' />
                          </div>
                      ) : null
                  }
              </div>
              <div className='col-1-of-3'>
                  {
                      institution.photo_8 ? (
                          <div className=''>
                              <img className='' src={institution.photo_8} alt='' />
                          </div>
                      ) : null
                  }
              </div>
              <div className='col-1-of-3'>
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
              <div className='col-1-of-3'>
                  {
                      institution.photo_10 ? (
                          <div className=''>
                              <img className='' src={institution.photo_10} alt='' />
                          </div>
                      ) : null
                  }
              </div>
              <div className='col-1-of-3'>
                  {
                      institution.photo_12 ? (
                          <div className=''>
                              <img className='' src={institution.photo_11} alt='' />
                          </div>
                      ) : null
                  }
              </div>
              <div className='col-1-of-3'>
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
              <div className='col-1-of-3'>
                  {
                      institution.photo_13 ? (
                          <div className=''>
                              <img className='' src={institution.photo_13} alt='' />
                          </div>
                      ) : null
                  }
              </div>
              <div className='col-1-of-3'>
                  {
                      institution.photo_14 ? (
                          <div className=''>
                              <img className='' src={institution.photo_14} alt='' />
                          </div>
                      ) : null
                  }
              </div>
              <div className='col-1-of-3'>
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
              <div className='col-1-of-3'>
                  {
                      institution.photo_16 ? (
                          <div className=''>
                              <img className='' src={institution.photo_16} alt='' />
                          </div>
                      ) : null
                  }
              </div>
              <div className='col-1-of-3'>
                  {
                      institution.photo_17 ? (
                          <div className=''>
                              <img className='' src={institution.photo_17} alt='' />
                          </div>
                      ) : null
                  }
              </div>
              <div className='col-1-of-3'>
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
              <div className='col-1-of-3'>
                  {
                      institution.photo_19 ? (
                          <div className=''>
                              <img className='' src={institution.photo_19} alt='' />
                          </div>
                      ) : null
                  }
              </div>
              <div className='col-1-of-3'>
                  {
                      institution.photo_20 ? (
                          <div className=''>
                              <img className='' src={institution.photo_20} alt='' />
                          </div>
                      ) : null
                  }
              </div>
              <div className='col-1-of-3'></div>
          </div>
      );

      return images;
  };

  return (
      <div className='institutiondetail'>
          <Helmet>
              <title>4_Hope - Institution | {`${institution.institution_name}`}</title>
              <meta
                  name='description'
                  content='institution detail'
              />
          </Helmet>
          <div className=''>
              <h1 className=''>{institution.institution_name}</h1>
              <p className=''>{institution.country}{institution.city}{institution.state}{institution.zipcode}</p>
          </div>
          <div className=''>
              <div className=''>
                  <Link className='' to='/'>Home</Link> / {institution.institution_name}
              </div>
          </div>
          <div className=''>
              <div className='col-3-of-4'>
                  <div className=''>
                      <img className='' src={institution.photo_main} alt='' />
                  </div>
              </div>
              <div className='col-1-of-4'>
                  <div className=''>
                      <img className='' src={vonlunteer.photo} alt='' />
                  </div>
                  <h3 className=''>{vonlunteer.name}</h3>
                  <p className=''>{vonlunteer.phone}</p>
                  <p className=''>{vonlunteer.email}</p>
                  <p className=''>{vonlunteer.description}</p>
              </div>
          </div>
          <div className=''>
              <div className='col-1-of-2'>
                  <ul className=''>
                      <li className=''>Institution type: {institution.institution_type}</li>
                      <li className=''>Verified: {institution.verified}</li>
                  </ul>
              </div>
              <div className='col-1-of-2'>
                  <ul className=''>
                      <li className=''>Country: {institution.country}</li>
                      <li className=''>City: {institution.city}</li>
                      <li className=''>State: {institution.state}</li>
                      <li className=''>Zipcode: {institution.zipcode}</li>
                  </ul>
              </div>
          </div>
          <div className=''>
              <p className=''>{institution.description}</p>
          </div>
          {displayInteriorImages()}
      </div>
  );
};
export default InstitutionDetails;
