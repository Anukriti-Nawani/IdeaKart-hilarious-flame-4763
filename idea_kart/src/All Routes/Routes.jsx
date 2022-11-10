import React from "react";
// import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import About from "../pages/About";
import AccountInfoPage from "../pages/AccountInfoPage";

import Contactpage from "../pages/Contactpage";
import LoginPage from "../pages/LoginPage";
import Notifications from "../pages/Notifications";
import SignupPage from "../pages/SignUpPage";
// import Cart from "../products/Cart";
// import Checkout from "../products/Checkout";
// import Description from "../products/Description";
// import Pay from "../products/Pay";
import { Products } from "../products/Products";
// import Signin from "../signin/Signin";
// import Signup from "../signup/Signup";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/about" element={<About />} />

        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/notifications" element={<Notifications/>}></Route>
        <Route path="/accountinfo" element={<AccountInfoPage/>}></Route>
        {/* <Route path={"/"} element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Pay />} />
       
        
       
        <Route path="/products/description/:id" element={<Description />} /> */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
