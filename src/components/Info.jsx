import React from "react";
import photo from "../assets/profile-photo.jpg";
import emailicon from "../assets/email.svg";
import linkedinicon from "../assets/linkedin.svg";
import "../App.css";

export default function Info() {
  const name = "Vincent Croos";
  const title = "Front-End Developer";
  const website = "https://vincentcroos.com";

  return (
    <>
      <div className="overlay">
        <img src={photo} className="profile-photo" alt="Vincent Croos" />
      </div>
      <div className="info-container">
        <h1>{name}</h1>
        <p className="title">{title}</p>
        <a className="website" href={website}>
          vincentcroos.com
        </a>
      </div>

      <div className="buttons">
        <div className="email">
          <img src={emailicon} className="email-icon" alt="email icon" /> Email
        </div>
        <a href="https://www.linkedin.com/in/vincent-croos/" target="_blank">
          <div className="linkedin">
            <img
              src={linkedinicon}
              className="linkedin-icon"
              alt="linkedin logo"
            />
            LinkedIn
          </div>
        </a>
      </div>
      {/* <div className="test">
        <h1>test</h1>
        <img src={emailicon} />
      </div> */}
    </>
  );
}
