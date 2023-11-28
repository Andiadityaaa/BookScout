import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen"; 
import { GiBookshelf } from "react-icons/gi";
import { BsQuestionSquare } from "react-icons/bs";
import { GiBookCover } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";

import Welcome from "./pages/Welcome";
import Books from "./pages/Books";
import About from "./pages/About";
import Buy from "./pages/Buy";
import Dev from "./pages/Dev";
import BookDetail from "./pages/Detail";

import "./App.css";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const isSplashShown = localStorage.getItem("isSplashShown");
    if (isSplashShown) {
      setShowSplash(false);
    } else {
      setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem("isSplashShown", "true");
      }, 7000);
    }
  }, []);

  return (
    <div className="appContainer">
      <Router>
        <header>
          <div className="appHeader">
            <p id="titleGroup"> BookScout </p>
          </div>
        </header>
        <div className="sidebar">
          <nav>
            <NavLink to="/" className="sidebarLink" activeClassName="activeLink">
              <AiOutlineHome className="icon" />
              Home
            </NavLink>
            <NavLink to="/books" className="sidebarLink" activeClassName="activeLink">
              <GiBookshelf className="icon" />
              New Books
            </NavLink>
            <NavLink to="/buy" className="sidebarLink" activeClassName="activeLink">
              <GiBookCover className="icon" />
              Old Books
            </NavLink>
            <NavLink to="/about" className="sidebarLink" activeClassName="activeLink">
              <BsQuestionSquare className="icon" />
              About
            </NavLink>
          </nav>
        </div>
        <div className="mainContent">
          {showSplash ? (
            <SplashScreen />
          ) : (
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/books" element={<Books />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/about" element={<About />} />
              <Route path="/developer" element={<Dev />} />
              <Route path="/bookdetail/:rank" element={<BookDetail />} />
            </Routes>
          )}
        </div>
      </Router>
    </div>
  );
};

export default App;
