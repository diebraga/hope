import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FiCornerDownLeft } from 'react-icons/fi';
import PropTypes from 'prop-types';
import Animation from '../../components/Animation';
import Header from '../../components/Header';
import { login } from '../../actions/auth.js';

import { Container } from './styles';

const Signin: React.FC = ({ login, isAuthenticated }: any) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e: any): void =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: any): void => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) return <Redirect to="/institutions" />;

  return (
    <>
      <Header />
      <Container>
        <Helmet>
          <title>4_Hope - Sign In</title>
          <meta name="description" content="sign in page" />
        </Helmet>
        <div className="text-center">
          {/* <Animation /> */}
          <h1 className="text-dark">Sign In</h1>
          <p className="text-dark">Sign into your Account</p>
          <form className="" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
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
              <button className="btn btn-danger btn-lg btn-block" type="submit">
                Login
              </button>
            </div>
          </form>
          <p>
            <Link to="/signup">Do not have an account?</Link>
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

Signin.propTypes = {
  login: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state: any): any => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Signin);
