import { GETDATA} from "./action";

const inits = {
    productsData: [],
   
  };


  export const reducer = (state = inits, action) => {
    // console.log(action.payload);
    switch (action.type) {
      
      case GETDATA: {
        return { ...state, productsData: action.payload };
      }
     
     
      
      default: {
        return state;
      }
    }
  };
 
  