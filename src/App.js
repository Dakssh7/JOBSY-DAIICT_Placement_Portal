import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Explorework from "./Components/Explorework";
import Landingpage from "./Components/Landingpage";
import Navbar from "./Components/Navbar";
import Profiles from "./Components/Profiles";
import Signin from './Components/Signin';
import ViewProfile from "./Components/ViewProfile";
import Toast from './features/Toast';

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
          <Route path="/getstarted" element={<Signin />} />
          <Route path="*" element={<h1> Not Found</h1>} />
        </Routes>
      </AnimatePresence>
      <Toast></Toast>
    </>
  );
}

export default App;
