import { GETDATA, GET_ERROR, GET_REQUEST } from "./action";

const inits = {
  loading: false,
  productsData: [],
  error: false,
};

export const reducer = (state = inits, action) => {
  console.log(action.payload);
  switch (action.type) {
    case GET_REQUEST:{
      return{
        ...state,
        loading: true,
        error: false,
      }
    }
    case GETDATA: {
      return { ...state, 
        loading: false,
        productsData: action.payload ,
        error: false,
      }
    }
    case GET_ERROR: {
      return { ...state, 
        loading: false,
        error: true,
      }
    }

    default: {
      return state;
    }
  }
};
