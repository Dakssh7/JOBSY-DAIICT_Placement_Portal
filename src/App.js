import React from "react";
import Navbar from "./Components/Navbar";
import Profiles from "./Components/Profiles";
import Explorework from "./Components/Explorework";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./Components/Login";
import Landingpage from './Components/Landingpage';
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/explorework" element={<Explorework />} />
          <Route path="/hiretalent" element={<Profiles />} />
          <Route path="/getstarted" element={<Login />} />
          <Route path="*" element={<h1> Not Found</h1>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
