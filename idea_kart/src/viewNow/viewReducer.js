import { GET_DETAILS } from "./viewActionType";

const productState={
    details:[]
}

export default function viewReducer(state=productState,action){
    // console.log(action.payload)
      switch(action.type){
        case GET_DETAILS:{
            return{
                ...state,details:action.payload
            }
            
        }
        default:{
            return state;
        }
      }
}