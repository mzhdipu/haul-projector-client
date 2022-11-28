import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content py-12">
      <div className="text-center">
        <h1 className="font-bold text-4xl"><Link to='/'>Haul Projector</Link></h1>
        <p>
          mzhdipu <br />
          Providing reliable tech since 2022
        </p>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
