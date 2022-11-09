import React from "react";
// import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "../pages/About";

import Contactpage from "../pages/Contactpage";
// import Cart from "../products/Cart";
// import Checkout from "../products/Checkout";
// import Description from "../products/Description";
// import Pay from "../products/Pay";
// import { Products } from "../products/Products";
// import Signin from "../signin/Signin";
// import Signup from "../signup/Signup";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/about" element={<About />} />
        {/* <Route path={"/"} element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Pay />} />
        <Route path="/user/login" element={<Signin />} />
        <Route path="/user/signup" element={<Signup />} />
        
       
        <Route path="/products/description/:id" element={<Description />} /> */}
      </Routes>
     
    </div>
  );
};

export default AllRoutes;