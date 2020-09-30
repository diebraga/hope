/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/auth';
import Alert from '../Alert';

import { Container } from './styles';

const Header: React.FC = ({
  auth: { isAuthenticated, loading },
  logout,
}: any) => {
  const authLinks = (
    <a className="" onClick={logout} href="#!">
      Logout
    </a>
  );

  const guestLinks = (
    <>
      <Link className="text-dark" to="/login">
        Login
      </Link>
      &nbsp; &nbsp;
      <Link className="text-dark" to="/signup">
        Sign Up
      </Link>
    </>
  );

  return (
    <>
      <Container>
        <div className="navbar navbar-expand-lg-xl navbar-light bg-success">
          <Link className="navbar-brand" to="/">
            4_Hope
          </Link>
          <div className="">
            {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
          </div>
        </div>
        <div className="navbar navbar-expand-md navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li>
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" exact to="/">
                  aaaa
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" exact to="/">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" exact to="/">
                  aaa
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Alert />
      </Container>
    </>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any): any => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
