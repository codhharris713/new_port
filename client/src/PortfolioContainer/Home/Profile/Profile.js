import React from "react";
import "./Profile.css";
import ScrollService from "../../../utilites/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.facebook.com/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.google.com/">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/?hl=en">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://twitter.com/home?lang=en">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Cody</span>
            </span>
          </div>
          <div className="profile-details-role">
              <span className="primary-text">
                  {" "}
                  <h1>
                     {" "}
                     
                  </h1>
                  <span className="porfile-role-tagline">
                  Knack of building applications with front and back end operations.
                  </span>
              </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              > Hire Me </button>
            <a href="newOne.pdf" download="Cody newOne.pdf">
            <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
