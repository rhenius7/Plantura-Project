import React, { useState } from "react";
import "./Navbar.css";
import logo_light from "../../assets/logo-black-png.png";
import logo_dark from "../../assets/logo-white-bg.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ theme, setTheme, onProductsClick }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/solution?search=${searchQuery}`);
    }
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          src={theme === "light" ? logo_light : logo_dark}
          alt="Logo"
          className="logo"
        />
        <span className="brand-name">
          <i>
            <b>PLANTURA</b>
          </i>
        </span>
        &emsp;
      </div>

      <ul>
        <li onClick={() => navigate("/home")}>Detector</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={onProductsClick}>ChatBot</li>
        <li onClick={() => navigate("/solution")}>More Diseases</li>
        <li onClick={() => navigate("/")}>Logout</li>
      </ul>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          
        />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt="Search Icon"
          onClick={handleSearch}
          style={{ cursor: "pointer" }}
        />
      </div>
      <img
        onClick={toggleMode}
        src={theme === "light" ? toggle_light : toggle_dark}
        alt="Toggle Icon"
        className="toggle-icon"
      />
    </div>
  );
};

export default Navbar;
