import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./styles/Sidebar.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";


const App = () => {
  return (
    <>
   
    <BrowserRouter>
    <Sidebar />
      <Routes>
      
             
      </Routes>
    </BrowserRouter>
    </>
    
  );
  
};

export default App;
