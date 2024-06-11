import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import MobiLogo from "../Asserts/Mobi_Logo.png";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/Home", label: "Home" },
    { path: "/Features", label: "Features" },
    { path: "/Testimonials", label: "Testimonials" },
    { path: "/Blog", label: "Blog" },
    { path: "/Contact", label: "Contact" }
  ];

  return (
    <div className="Navbar">
      <div className="logo">
        <Link to="/Home">
          <img src={MobiLogo} alt="Mobi Logo" />
        </Link>
      </div>
      <ul className="NavUl">
        {navItems.map((item) => (
          <li
            key={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            <Link to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
