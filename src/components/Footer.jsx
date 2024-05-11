import React from "react";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
import "../App.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <a href="https://twitter.com/vincecroos" target="_blank">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="https://facebook.com/vincecroos/" target="_blank">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="https://instagram.com/vincecroos/" target="_blank">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="https://github.com/VincentWebDev" target="_blank">
        <img src={github} alt="github" />
      </a>
    </div>
  );
}
