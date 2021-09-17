import * as actionTypes from "./types";
import axios from "axios";
const url = "http://192.168.50.140:8000/api";

const loginLoading = () => {
  return {
    type: actionTypes.LOGIN_LOADING,
  };
};

export const login = (body) => async (dispatch) => {
  const { email, password } = body;
  dispatch(loginLoading());
  try {
    const res = await axios.post(`${url}/users/login`, { email, password });
    dispatch({
      type: actionTypes.LOGIN_LOAD_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_LOAD_FAIL,
      payload: error.message,
    });
  }
};

const registerLoading = () => {
  return {
    type: actionTypes.REGISTER_LOADING,
  };
};

export const register = (body) => async (dispatch) => {
  const { email, password, username, passwordConfirmation } = body;
  dispatch(registerLoading());
  try {
    const res = await axios.post(`${url}/users/signup`, {
      email,
      userName: username,
      password,
      passwordConfirm: passwordConfirmation,
    });
    dispatch({
      type: actionTypes.REGISTER_LOAD_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_LOAD_FAIL,
      payload: error.message,
    });
  }
};

const flightsLoading = () => {
  return {
    type: actionTypes.FLIGHTS_LOADING,
  };
};
export const getFlights = (body) => async (dispatch) => {
  const { page } = body;
  dispatch(flightsLoading());
  try {
    const res = await axios.get(`${url}/flights/:${page}`);
    dispatch({
      type: actionTypes.FLIGHTS_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FLIGHTS_LOAD_FAIL,
      payload: error.message,
    });
  }
};

const bookingsLoading = () => {
  return {
    type: actionTypes.BOOKINGS_LOADING,
  };
};
export const getBookings = (body) => async (dispatch) => {
  const { page } = body;
  dispatch(flightsLoading());
  try {
    const res = await axios.get(`url/all/:${page}`);
    dispatch({
      type: actionTypes.BOOKINGS_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.BOOKINGS_LOAD_FAIL,
      payload: error.message,
    });
  }
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
