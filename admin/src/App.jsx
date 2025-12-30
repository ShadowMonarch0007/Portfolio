import React from 'react'
import { Toaster } from "react-hot-toast";
import { Background } from './components/Background'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar';


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
      </div>
    </div>
  )
}

export default App