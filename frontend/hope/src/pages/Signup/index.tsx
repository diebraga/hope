import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FiCornerDownLeft } from 'react-icons/fi';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import { setAlert } from '../../actions/alert';
import { signup } from '../../actions/auth.js';

import { Container } from './styles';

const Signup: React.FC = ({ setAlert, signup, isAuthenticated }: any) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e: any): void =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: any): void => {
    e.preventDefault();

    if (password !== password2)
      setAlert('Passwords do not match', 'error alert alert-danger');
    else signup({ name, email, password, password2 });
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <>
      <Header />
      <Container>
        <Helmet>
          <title>4_Hope - Sign Up</title>
          <meta name="description" content="sign up page" />
        </Helmet>
        <div className="text-center">
          <h1 className="text-dark">Sign Up</h1>
          <p className="text-dark">Create your Account</p>
          <form className="" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={e => onChange(e)}
                required
              />
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
              />
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
              />
              <input
                className="form-control"
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={e => onChange(e)}
              />
              <button className="btn btn-danger btn-lg btn-block" type="submit">
                Register
              </button>
            </div>
          </form>
          <p>
            <Link to="/signin">Already have an account?</Link>
          </p>
          <Link to="/">
            <FiCornerDownLeft />
            &nbsp;Initial page
          </Link>
        </div>
      </Container>
    </>
  );
};

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state: any): any => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, signup })(Signup);
