import './AboutMeStyle.css';
import React from 'react';
import Foto from '../assets/Pro Pic.jpg';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> Who Am I </h1>
        <p> I 'm a React Front-End Developer. I Create Responsive Secure Websites For My Clients.</p>
        <Link to={'/contact'}>
          <button className="btn"> Contact </button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stact top">
            <img src={Foto} className="img" alt="true" />
          </div>
          <div className="img-stact bottom">
            <img src={Foto} className="img" alt="true" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stact top">
            <img src={Foto} className="img" alt="true" />
          </div>
          <div className="img-stact bottom">
            <img src={Foto} className="img" alt="true" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stact top">
            <img src={Foto} className="img" alt="true" />
          </div>
          <div className="img-stact bottom">
            <img src={Foto} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
