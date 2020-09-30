/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/auth';

// import { Container } from './styles';

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
      <Link className="" to="/login">
        Login
      </Link>
      <Link className="" to="/signup">
        Sign Up
      </Link>
    </>
  );

  return (
    <>
      <nav className="">
        <div className="">
          <div className="">
            <Link className="" to="/">
              Hope
            </Link>
          </div>
          <div className="">
            {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
          </div>
        </div>
        <div className="">
          <li className="">
            <NavLink className="" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink className="" exact to="/">
              aaaa
            </NavLink>
          </li>
          <li className="">
            <NavLink className="" exact to="/">
              About
            </NavLink>
          </li>
          <li className="">
            <NavLink className="" exact to="/">
              aaa
            </NavLink>
          </li>
        </div>
      </nav>
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
