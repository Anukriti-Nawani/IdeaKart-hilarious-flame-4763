import {
  AUTH_LOGIN_IN_ERROR,
  AUTH_LOGIN_IN_LOADING,
  AUTH_LOGIN_IN_SUCCESS,
  AUTH_LOGIN_OUT,
  AUTH_SIGN_UP_ERROR,
  AUTH_SIGN_UP_LOADING,
  AUTH_SIGN_UP_SUCCESS,
} from "./authactionsTypes";

export const initState = {
  loading: false,
  token: "",
  isAuth: false,
  user: {},
  isAuth: false,
  error: false,
};

export const authReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case AUTH_SIGN_UP_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case AUTH_SIGN_UP_SUCCESS: {
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        error: false,
      };
    }
    case AUTH_SIGN_UP_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_LOGIN_IN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case AUTH_LOGIN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        isAuth: true,
        user: action.payload.user,
        error: false,
      };
    }
    case AUTH_LOGIN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_LOGIN_OUT: {
      return {
        ...state,
        token: "",
        isAuth: false,
        user: {},
      };
    }

    default: {
      return state;
    }
  }
};