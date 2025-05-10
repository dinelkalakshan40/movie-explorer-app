import './App.css'
import LoginForm from "./components/LoginForm.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import {Routes,Route} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage.jsx";
import Home from "./components/Home.jsx"

function App() {


  return (
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/register" element={<SignUpForm/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
  )
}

export default App
