
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import AdminSignUp from './Components/AdminSignUp';
import AdminLogin from './Components/AdminLogin';
import About from './Components/About';
import BussinessLogin from './Components/BussinessLogin';
import BussinessSignUp from './Components/BussinessSignUp';
import SupportLogin from './Components/SupportLogin';
import SupportSignUp from './Components/SupportSignUp';
import Keyc from './Components/Keyc';
import InsurenceDocumentaion from './Components/InsuranceDocumentaion';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/adminsignup" element={<AdminSignUp />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/about" element={<About />} />
          <Route path="/businesslogin" element={<BussinessLogin />} />
          <Route path="/businesssignup" element={<BussinessSignUp />} />
          <Route path="/supportlogin" element={<SupportLogin />} />
          <Route path="/supportsignup" element={<SupportSignUp />} />
          <Route path="/keys" element={<Keyc />} />
          <Route path="/insurance" element={<InsurenceDocumentaion />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
