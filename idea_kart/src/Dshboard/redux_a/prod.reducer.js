import { ADD_ERROR, ADD_PROD, GET_PROD } from "./prod.actionTypes"

const initialState={
    data:[],
    error:false,
    dash:{ home:true,
        new:false,
        prod:false,
        cres:false}
}

export const productReducer=(state=initialState,{type,payload})=>{

    switch(type){

       case ADD_PROD:{
        return {...state,data:[...state.data,payload]}
       }

       case GET_PROD:{
        return  {...state,data:payload}
       }

       case ADD_ERROR :{
        return {...state,error:true}
       }

       case "DashBoard":{
        return {...state,dash:payload}
       }

       case "upload":{
        return {...state,dash:{...state.dash,home:false}}
       }

        default :{
            return state
        }

    }

}