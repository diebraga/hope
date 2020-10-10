import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';
import { FiCornerDownLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import { Volunteer, Institution, Media } from './styles';

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
      <div key={1} className="d-flex justify-content-between">
        <div>
          {institution.photo_1 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_1} alt="" />
            </div>
          ) : null}
        </div>
        <div>
          {institution.photo_2 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_2} alt="" />
            </div>
          ) : null}
        </div>
        <div>
          {institution.photo_3 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_3} alt="" />
            </div>
          ) : null}
        </div>
      </div>,
    );

    images.push(
      <div key={2} className="d-flex justify-content-between">
        <div>
          {institution.photo_4 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_4} alt="" />
            </div>
          ) : null}
        </div>
        <div>
          {institution.photo_5 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_5} alt="" />
            </div>
          ) : null}
        </div>
        <div>
          {institution.photo_6 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_6} alt="" />
            </div>
          ) : null}
        </div>
      </div>,
    );

    images.push(
      <div key={3} className="d-flex justify-content-between">
        <div>
          {institution.photo_7 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_7} alt="" />
            </div>
          ) : null}
        </div>
        <div>
          {institution.photo_8 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_8} alt="" />
            </div>
          ) : null}
        </div>
        <div>
          {institution.photo_9 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_9} alt="" />
            </div>
          ) : null}
        </div>
      </div>,
    );

    images.push(
      <div key={4} className="d-flex justify-content-between">
        <div>
          {institution.photo_10 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_10} alt="" />
            </div>
          ) : null}
        </div>
        <div>
          {institution.photo_12 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_11} alt="" />
            </div>
          ) : null}
        </div>
        <div>
          {institution.photo_12 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_12} alt="" />
            </div>
          ) : null}
        </div>
      </div>,
    );

    images.push(
      <div key={5} className="d-flex justify-content-between">
        <div>
          {institution.photo_13 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_13} alt="" />
            </div>
          ) : null}
        </div>
        <div>
          {institution.photo_14 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_14} alt="" />
            </div>
          ) : null}
        </div>
        <div>
          {institution.photo_15 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_15} alt="" />
            </div>
          ) : null}
        </div>
      </div>,
    );

    images.push(
      <div key={6} className="d-flex justify-content-between">
        <div>
          {institution.photo_16 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_16} alt="" />
            </div>
          ) : null}
        </div>
        <div>
          {institution.photo_17 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_17} alt="" />
            </div>
          ) : null}
        </div>
        <div>
          {institution.photo_18 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_18} alt="" />
            </div>
          ) : null}
        </div>
      </div>,
    );

    images.push(
      <div key={7} className="d-flex justify-content-between">
        <div>
          {institution.photo_19 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_19} alt="" />
            </div>
          ) : null}
        </div>
        <div>
          {institution.photo_20 ? (
            <div>
              <img className="col-sm-12" src={institution.photo_20} alt="" />
            </div>
          ) : null}
        </div>
      </div>,
    );

    return images;
  };

  return (
    <>
      <Header />
      <Helmet>
        <title>4_Hope - Institution |{`${institution.title}`}</title>
        <meta name="description" content="Institution detail" />
      </Helmet>
      <Institution>
      <br/>
      <br/>
      <Fade direction="up" cascade="true" triggerOnce duration={1500}>
        <div>
          <img className="col-md-12" src={institution.photo_main} alt="" />
        </div>
          <br />
          <h2 className="text-danger">{institution.institution_name}</h2>
          <p className="text-danger text-center">
            {institution.institution_type}
          </p>
          <br/>
          <p>
            Country:&nbsp;
            {institution.country}
          </p>
          <p>
            City:&nbsp;
            {institution.city}
          </p>
          <p>
            State:&nbsp;
            {institution.state || '-'}
          </p>
          <p>
            Zipcode:&nbsp;
            {institution.zipcode}
          </p>
          <p>
            About:&nbsp;
            {institution.description || '-'}
          </p>
          <br/>
          <Link to="/search">
            <FiCornerDownLeft />
            &nbsp;Back
          </Link>
          <br/>
      </Fade>
      </Institution>
      <Media>
        <Fade direction="up" cascade="true" triggerOnce duration={1500} delay={1500}>
          <br />
            <h2 className="text-white text-center">Media</h2>
          <br />
            {displayInteriorImages()}
          <br />
        </Fade>
      </Media>
      <Volunteer>
        <br/>
        <Fade direction="up" cascade="true" triggerOnce duration={1500} delay={3000}>
          <div>
            <img className="col-md-12" src={volunteer.photo} alt="" />
          </div>
          <br />
          <h3 className="text-danger">{volunteer.name}</h3>
          <p className="text-danger text-center">
            Volunteer&nbsp;
          </p>
          <br/>
          <p>
            Age:&nbsp;
            {volunteer.age}
          </p>
          <p>
            Phone:&nbsp;
            {volunteer.phone}
          </p>
          <p>
            Email:&nbsp;
            {volunteer.email}
          </p>
          <p>
            Degree:&nbsp;
            {volunteer.degree || '-'}
          </p>
          <p>
            About:&nbsp;
            {volunteer.experience_volunteering || '-'}
          </p>
          <br/>
          <Link to="/search">
            <FiCornerDownLeft />
            &nbsp;Back
          </Link>
        </Fade>
        <br/>
      </Volunteer>
    </>
  );
};

export default InstitutionDetail;
