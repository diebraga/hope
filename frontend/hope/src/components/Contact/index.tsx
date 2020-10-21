/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';

// import { Container } from './styles';

const Contact: React.FC = ({ setAlert }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { name, email, subject, message } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e: any): void =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: any): void => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setLoading(true);
    axios
      .post(
        `http://127.0.0.1:8000/api/contacts/`,
        { name, email, subject, message },
        config,
      )
      .then(res => {
        setAlert('Message Sent', 'success');
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch(err => {
        setAlert('Error Sending Message', 'error');
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };

  return (
    <div className="">
      <Helmet>
        <title>Realest Estate - Contact</title>
        <meta name="description" content="Contact us" />
      </Helmet>
      <form className="" onSubmit={e => onSubmit(e)}>
        <label className="" htmlFor="name">
          Name*
        </label>
        <input
          className=""
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={e => onChange(e)}
          value={name}
          required
        />
        <label className="" htmlFor="email">
          Email*
        </label>
        <input
          className=""
          name="email"
          type="email"
          placeholder="Your Email"
          onChange={e => onChange(e)}
          value={email}
          required
        />
        <label className="" htmlFor="subject">
          Subject*
        </label>
        <input
          className=""
          name="subject"
          type="text"
          placeholder="Subject"
          onChange={e => onChange(e)}
          value={subject}
          required
        />
        <label className="" htmlFor="message">
          Message
        </label>
        <textarea
          className=""
          name="message"
          placeholder="Message"
          onChange={e => onChange(e)}
          value={message}
        />
        {loading ? (
          <div className="__loader">
            <Loader type="ThreeDots" color="#424242" height={50} width={50} />
          </div>
        ) : (
          <button className="" type="submit">
            Send
          </button>
        )}
      </form>
    </div>
  );
};

Contact.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Contact);
