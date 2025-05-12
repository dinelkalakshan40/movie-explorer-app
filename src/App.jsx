import './App.css'
import {Routes,Route} from "react-router-dom";
import React from "react";
import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {

  return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<SignUpPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/movie/:id" element={<MovieDetailsPage/>}/>
        </Routes>
  );
}

export default App
