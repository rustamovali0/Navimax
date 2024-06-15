import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobiLogo from "../Asserts/Mobi_Logo.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/Home", label: "Home" },
    { path: "/Features", label: "Features" },
    { path: "/Testimonials", label: "Testimonials" },
    { path: "/Blog", label: "Blog" },
    { path: "/Contact", label: "Contact" }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navbar">
      <div className="logo">
        <Link to="/Home">
          <img src={MobiLogo} alt="Mobi Logo" />
        </Link>
      </div>
      <div className={`burger-menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`NavUl ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <li
            key={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            <Link to={item.path} onClick={toggleMenu}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
