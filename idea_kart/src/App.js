import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages_s/LoginPage";
import SignupPage from "./Pages_s/SignupPage";
import AllRoutes_s from "./components_s/AllRoutes_s";

function App() {
  return (
    <div className="App">
      <div style={{ width: "100%", border: "1px solid red" }}>
        <h2>Navbar</h2>
      </div>
      <h1>IdeaKart App</h1>
      <AllRoutes_s/>
    </div>
  );
}

export default App;
