import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Explorework from "./Components/Explorework";
import Landingpage from "./Components/Landingpage";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Profiles from "./Components/Profiles";
import ViewProfile from "./Components/ViewProfile";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landingpage />} />

          <Route path="/explorework" element={<Explorework />} />
          <Route path="/hiretalent" element={<Profiles />} />
          <Route path="/hiretalent/:userID" element={<ViewProfile />} />
          <Route path="/getstarted" element={<Login />} />
          <Route path="*" element={<h1> Not Found</h1>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
