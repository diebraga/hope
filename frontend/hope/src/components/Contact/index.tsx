/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import { Container } from './styles';

const Contact: React.FC = () => {
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
        window.alert('Message sent!');
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch(err => {
        window.alert('Error sending message!');
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };

  return (
    <Container>
      <br />
      <h2 className="text-center">Contact Us</h2>
      <form className="form-group" onSubmit={e => onSubmit(e)}>
        <label className="" htmlFor="name">
          Name*
        </label>
        <input
          className="form-control"
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
          className="form-control"
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
          className="form-control"
          name="subject"
          type="text"
          placeholder="Subject"
          onChange={e => onChange(e)}
          value={subject}
          required
        />
        <label className="" htmlFor="message">
          Message*
        </label>
        <textarea
          className="form-control"
          name="message"
          placeholder="Message"
          onChange={e => onChange(e)}
          value={message}
          required
        />
        <br />
        {loading ? (
          <div>
            <Loader type="ThreeDots" color="#424242" height={50} width={50} />
          </div>
        ) : (
          <button className="btn btn-danger btn-lg btn-block" type="submit">
            Send
          </button>
        )}
      </form>
      <br />
      <br />
    </Container>
  );
};

export default Contact;
