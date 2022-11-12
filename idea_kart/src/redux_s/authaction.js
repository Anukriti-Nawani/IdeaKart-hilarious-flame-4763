import {
    AUTH_LOGIN_IN_ERROR,
    AUTH_LOGIN_IN_LOADING,
  AUTH_LOGIN_IN_SUCCESS,
  AUTH_LOGIN_OUT,
  AUTH_SIGN_UP_ERROR,
  AUTH_SIGN_UP_LOADING,
  AUTH_SIGN_UP_SUCCESS,
} from "./authactionTypes";
import axios from "axios";
export const signUp = (x) => async (dispatch) => {
  dispatch({ type: AUTH_SIGN_UP_LOADING });
  try {
    let res = await axios.post("https://ideakart-backend-server.onrender.com/users/signup", x);
    console.log(res.data);
    dispatch({ type: AUTH_SIGN_UP_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: AUTH_SIGN_UP_ERROR, payload: e.message });
  }
};

export const LogIn = (x) => async (dispatch) => {
    dispatch({ type: AUTH_LOGIN_IN_LOADING });
    try {
      let res = await axios.post("https://ideakart-backend-server.onrender.com/users/login", x);
      console.log(res.data);
    dispatch({ type: AUTH_LOGIN_IN_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: AUTH_LOGIN_IN_ERROR });
    }
  };

  export const  logOut =()=>async(dispatch)=>{
    dispatch({type: AUTH_LOGIN_OUT})
  }