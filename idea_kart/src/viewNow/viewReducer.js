import { GET_DETAILS, PRODUCTS } from "./viewActionType";

const productState={
    details:[],
    Products :[]
    
}

export default function viewReducer(state=productState,action){
    // console.log(action.payload)
      switch(action.type){
        case GET_DETAILS:{
            return{
                ...state,details:action.payload
            }
            
        }
        case PRODUCTS :{
            return{
                ...state,Products:action.payload
            }
            
        }
        default:{
            return state;
        }
      }
}