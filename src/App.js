import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Pages/Landing/Landing";
import Routing from "./Routes/Route";
import { ToastContainer } from "react-toastify";

import {Routes,Route} from 'react-router'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routing/>
   <ToastContainer/>
     
    </div>
  );
}

export default App;
