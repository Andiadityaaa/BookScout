import React from 'react';
import './SplashScreen.css'; // Add styles for the SplashScreen
import logoImg from "../components/logo.png"; // Import the logo image

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      {/* Animated logo or image */}
      <img src={logoImg} alt="Logo" className="logo" />
    </div>
  );
};

export default SplashScreen;
