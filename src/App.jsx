import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import './App.css'



function App() {
  const user = null;
  return (
    <>
<BrowserRouter>
  <Routes>
      <Route path="/" element={<Home />} />
    <Route path="/register" element={user ? <Home /> : <Register />} />
    <Route path="/login" element={user ? <Home /> : <Login />} />
  </Routes>
</BrowserRouter>

    </>
  ) 
}

export default App
