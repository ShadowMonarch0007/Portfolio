import React from 'react'
import { Toaster } from "react-hot-toast";
import { Background } from './components/Background'
import ScrollToTop from './components/ScrollToTop'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Connect from './pages/Connect';


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
        <div className="pt-20 md:pt-22 lg:pt-24 px-4 md:px-7 lg:px-12">
          <Routes>
            <Route path="/message" element={<Connect />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App