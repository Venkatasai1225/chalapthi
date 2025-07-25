import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "/components/Navbar";
import Home from "/pages/Home";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </>
  );
}

export default App;
