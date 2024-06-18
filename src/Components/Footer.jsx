import React from "react";
import Mobi_Logo from "../Asserts/Mobi_Logo.png";
const Fotter = () => {
  return (
    <div className="Fotter">
      <div className="FotterDiv">
        <img src={Mobi_Logo} alt="Mobi Logo" className="footer-logo" />
        <div className="iconsFooter">
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-linkedin-in"></i>{" "}
          <i class="fa-brands fa-instagram"></i>
        </div>
        <form className="footer-form">
          <input
            type="email"
            name="email"
            id="emailInput"
            placeholder="Enter your email"
          />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default Fotter;
