import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';
import { signup } from '../../actions/auth';

// import { Container } from './styles';

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

    if (password !== password2) setAlert('Passwords do not match', 'error');
    else signup({ name, email, password, password2 });
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="auth">
      <Helmet>
        <title>4_Hope - Sign Up</title>
        <meta name="description" content="sign up page" />
      </Helmet>
      <h1 className="">Sign Up</h1>
      <p className="">Create your Account</p>
      <form className="" onSubmit={e => onSubmit(e)}>
        <div className="">
          <input
            className=""
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="">
          <input
            className="auth__form__input"
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
            className="auth__form__input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="">
          <input
            className=""
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <button className="" type="submit">
          Register
        </button>
      </form>
      <p className="">
        <Link className="" to="/login">
          Already have an account?
        </Link>
      </p>
    </div>
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
