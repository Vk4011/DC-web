import React from 'react';
import logo from "../assets/DC.png";
import "../styles/Sidebar.css";

const Logo = ({ darkTheme }) => {
  return (
    <div className={`logo ${darkTheme ? 'logo-dark' : 'logo-light'}`}>
      <div className="logo-icon">
        <img src={logo} alt="" style={{width:"45px",height:"40px"}} />
      </div>
    </div>
  );
};

export default Logo;
