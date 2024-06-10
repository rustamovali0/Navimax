import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">{/* <img src="" alt="" /> */}</div>
      <div className="routes">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Testimonials</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
