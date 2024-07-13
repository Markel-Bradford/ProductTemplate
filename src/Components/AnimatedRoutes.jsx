import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Main from "../Layouts/Main";
import WomensApperal from "../Pages/WomensApperal";
import MensApperal from "../Pages/MensApperal";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "../ScrollToTop";
import Contact from "../Pages/Contact";

function AnimatedRoutes() {
    const location = useLocation();

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/mens" element={<MensApperal/>} />
          <Route path="/womens" element={<WomensApperal/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default AnimatedRoutes;
