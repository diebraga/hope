import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

// import { Container } from './styles';

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

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="">
      <Helmet>
        <title>4_Hope - Signin</title>
        <meta name="description" content="signin page" />
      </Helmet>
      <h1 className="">Sign In</h1>
      <p className="">Sign into your Account</p>
      <form className="" onSubmit={e => onSubmit(e)}>
        <div className="">
          <input
            className=""
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="">
          <input
            className=""
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <button className="" type="submit">
          Login
        </button>
      </form>
      <p className="">
        <Link className="" to="/signup">
          Don't have an account?
        </Link>
      </p>
    </div>
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
