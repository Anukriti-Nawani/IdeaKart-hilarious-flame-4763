import axios from "axios";
export const GETDATA = "GETDATA";
export const GET_REQUEST="GET_REQUEST";
export const GET_ERROR = "GET_ERROR";




export const getdata = (payload) => ({
  type: GETDATA,
  payload,
});



// ----------------network calls -------------------------------------//
export const fetchdata = () => async (dispatch) => {
  dispatch({type: GET_REQUEST})
  try{
  let res = await axios.get("https://data-base.onrender.com/products");
  console.log(res.data)
  dispatch(getdata(res.data));
  }catch(e){
       dispatch({type: GET_ERROR, payload: e.message})
  }
};

