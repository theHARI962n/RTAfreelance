import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import PageWrapper from "./PageWrapper";
import LandingPage from "./components/Landingpage/LandingPage";
import About from "./components/Landingpage/AboutSection";
import Contact from "./components/Landingpage/ContactSection";
import Navbar from "./Navbar";

function App() {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("[data-scroll-container]"),
  //     smooth: true,
  //     multiplier: 1,
  //     class: "is-reveal",
  //   });

  //   // Clean up on unmount
  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);

  return (
    <Router>
      
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PageWrapper><LandingPage /></PageWrapper>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import LandingPage from './LandingPage.jsx'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <LandingPage />
//     </>
//   )
// }

// export default App
