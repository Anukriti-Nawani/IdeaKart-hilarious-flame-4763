import axios from "axios"
import { ADD_ERROR, ADD_PROD, GET_PROD } from "./prod.actionTypes"


 export const AddToProduct=(data)=>async(dispatch)=>{

  let res= await axios.post("https://backend-server-ideakart.onrender.com/product",data)

    try{
      alert("Succesfully done")
dispatch({type:ADD_PROD,payload:res.data})
    }
    catch(e){
      alert(e.message)
        dispatch({type:ADD_ERROR})
    }


}

 // feedback: fp04_393 and fw15_411 - you should use constant file to keep the URLS and make them dynamic
 // as different env needs different set of URLs or config. 

export const GetToProduct=(data)=>async(dispatch)=>{

    let res= await axios.get("https://backend-server-ideakart.onrender.com/product")

  
      try{
        // console.log(res.data)
  dispatch({type:GET_PROD,payload:res.data})
      }
      catch(e){
        //   dispatch({type:GET_PROD,payload:res.data})
        console.log(e)

      }
  
  
  }
