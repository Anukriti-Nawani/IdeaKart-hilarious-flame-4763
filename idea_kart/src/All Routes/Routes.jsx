import React from "react";
// import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import About from "../pages/About";
import CartPage from "../pages/CartPage";

import Contactpage from "../pages/Contactpage";
import LoginPage from "../pages/LoginPage";
import PaymentPage from "../pages/PaymentPage";
import SignupPage from "../pages/SignUpPage";

import { Products } from "../products/Products";

import Search from "../search/search";
import ViewNow from "../viewNow/ViewNow";
import PrivateRoute from "./PrivateRoute";
import Notifications from "../pages/Notifications";
import CheckOutPage from "../pages/CheckOutPage";
import AccountInfoPage from "../pages/AccountInfoPage";
import DashNavbar from "../Dasboard/DashNavbar";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/about" element={<About />} />
        <Route path={"/"} element={<Products />} />

        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/ViewNow/:id" element={<ViewNow />}></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route path="/accountinfo" element={<AccountInfoPage />}></Route>
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/notifications" element={<Notifications />}></Route>
        <Route path="/checkout" element={<CheckOutPage />}></Route>
        <Route path="/dashboard" element={<DashNavbar />}></Route>

        {/* <Route path="/products/description/:id" element={<Description />} /> */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
