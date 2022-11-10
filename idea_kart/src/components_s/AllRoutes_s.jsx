import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages_s/LoginPage";
import SignupPage from "../Pages_s/SignupPage";

const AllRoutes_s = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
    </Routes>
  );
};

export default AllRoutes_s;
