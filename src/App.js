import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Routing from "./Routes/Route";
import { ToastContainer } from "react-toastify";

 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
      <ToastContainer />
    </div>
  );
}

export default App;
