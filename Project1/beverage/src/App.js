import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Sign_up from "./Components/SignUp";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>

        
        <Nav />
        <Routes>
          
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/Sign_up" element={<Sign_up />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
