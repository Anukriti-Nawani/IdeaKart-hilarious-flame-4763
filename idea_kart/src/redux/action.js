import axios from "axios";
export const GETDATA = "GETDATA";




export const getdata = (payload) => ({
  type: GETDATA,
  payload,
});



// ----------------network calls -------------------------------------//
export const fetchdata = () => async (dispatch) => {
  let res = await axios.get("https://data-base.onrender.com/products");
  dispatch(getdata(res.data));
};

