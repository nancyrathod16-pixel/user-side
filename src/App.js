import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Products from "./pages/View-Products";
import Fashion from "./pages/Fashion";
import FD from "./pages/Fd";
import HD from "./pages/Hd";
import See from "./pages/See More-Fashion";
import See1 from "./pages/See More-High";
import Add from "./pages/Add to Cart Fashion";
import Add1 from "./pages/Add to cart High";
import Buy from "./pages/By Fashion";
import Buy1 from "./pages/By High";
import High from "./pages/High-Jew";
import Fine from "./pages/Fine-Jew";
import Watch from "./pages/Watches";


function App() {
  return (
    <>
      <Navbar />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view-products" element={<Products />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/fd" element={<FD />} />
        <Route path="/hd" element={<HD />} />
        <Route path="/see more-fashion" element={<See/>} />
        <Route path="/see more-high" element={<See1/>} />
        <Route path="/add to cart fashion" element={<Add/>} />
        <Route path="/add to cart high" element={<Add1/>} />
        <Route path="/by fashion" element={<Buy/>} />
        <Route path="/by high" element={<Buy1/>} />
        <Route path="/high-jew" element={<High/>} />
        <Route path="/fine-jew" element={<Fine/>} />
        <Route path="/watches" element={<Watch/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;