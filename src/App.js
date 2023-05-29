import "./App.css";
import Signup from "./auth/Signup";
import Home from "./pages/Home";
import Navbar from "../src/component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<Signup />} />
    </Routes>
  );
}

export default App;
