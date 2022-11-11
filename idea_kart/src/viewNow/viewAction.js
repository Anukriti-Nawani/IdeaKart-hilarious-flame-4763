import { GET_DETAILS } from "./viewActionType";
import axios from "axios"
export const getDetails =(id)=>async(dispatch)=>{
    // console.log("hi")
    // console.log(id)
    let response = await axios.get(`https://data-base.onrender.com/products?_id=${id}`)
    let data = response.data;
   dispatch({type:GET_DETAILS,payload:data})
    // console.log(data)
}