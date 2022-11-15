import logo from './logo.svg';
import './App.css';
import Favicon from "react-favicon";


import AllRoutes from './All Routes/Routes';


function App() {
  return (
    <div className="App">

    <Favicon url="https://cdn1.vectorstock.com/i/1000x1000/45/05/book-icon-books-in-various-angles-vector-21684505.jpg"></Favicon>

      <AllRoutes/>
   
    </div>
  );
}

export default App;
