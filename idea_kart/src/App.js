import logo from './logo.svg';
import './App.css';
import NewProduct from "../src/Dshboard/FunctionalityPart/NewProduct"
import Navbar from "../src/Navbar/Navbar"
import Products from './Dshboard/FunctionalityPart/Products';
import DashNavbar from './Dshboard/DashNavbar';
import  Routes  from '../src/All Routes/Routes';



function App() {
  return (
    <div className="App">
    <Routes/>
    <DashNavbar/>
    
    
    </div>
  );
}

export default App;
