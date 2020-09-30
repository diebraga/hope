import axios from 'axios';
import { string } from 'prop-types';
import { setAlert } from './alert';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';

interface Proops {
  name: string;
  email: string;
  password: string;
  password2: string;
}

// auth for signin

export const login = ({ email, password }: Proops) => async (dispatch: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      `http//:localhost:8000/api/token/`,
      body,
      config,
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Authenticated successfully', 'success'));
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch(setAlert('Error Authenticating', 'error'));
  }
};

// auth for signup

export const signup = ({ name, email, password, password2 }: Proops) => async (
  dispatch: any,
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password, password2 });

  try {
    const res = await axios.post(
      `http//:localhost:8000/api/accounts/signup`,
      body,
      config,
    );

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Authenticated successfully', 'success'));
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL,
    });

    dispatch(setAlert('Error Authenticating', 'error'));
  }
};

export const logout = () => (dispatch: any) => {
  dispatch(setAlert('logout successful.', 'success'));
  dispatch({ type: LOGOUT });
};
