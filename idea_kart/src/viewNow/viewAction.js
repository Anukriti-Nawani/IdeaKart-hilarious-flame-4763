import { GET_DETAILS, PRODUCTS } from "./viewActionType";
import axios from "axios"
export const getDetails =(id)=>async(dispatch)=>{
    // console.log("hi")
    console.log(id)
    let response = await axios.get(`https://data-base.onrender.com/products?_id=${id}`)
    let data = response.data;
   dispatch({type:GET_DETAILS,payload:data})
    // console.log(data)
}

export const productData = ()=>async(dispatch)=>{
    //console.log("hello")
    let response = await axios.get("http://localhost:8081/products")
    let data = response.data
    return(dispatch({type:PRODUCTS,payload:data}))
     //console.log(data)
}