import "./App.css";
import Signup from "./auth/Signup";
import Home from "./pages/Home";
import { Router, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Home />
      {/* <Signup /> */}
    </div>
  );
}

export default App;
