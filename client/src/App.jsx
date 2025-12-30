import React from "react";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Connect from "./pages/Connect";
import Navbar from "./components/Navbar";
import { Background } from "./components/Background";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Background />
      </div>
      <div className="relative z-10">
        <Toaster position="top-center" reverseOrder={true} />
        <ScrollToTop />
        <Navbar />
        <div className="pt-20 md:pt-22 lg:pt-24 px-6 md:px-9 lg:px-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
