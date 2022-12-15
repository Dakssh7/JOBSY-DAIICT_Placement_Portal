import React from "react";
import Navbar from "./Components/Navbar";
import Profiles from "./Components/Profiles";
import Explorework from "./Components/Explorework";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Landingpage from './Components/Landingpage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/explorework" element={<Explorework />} />
        <Route path="/hiretalent" element={<Profiles />} />
        <Route path="/getstarted" element={<Login />} />
        <Route path="*" element={<h1> Not Found</h1>} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
