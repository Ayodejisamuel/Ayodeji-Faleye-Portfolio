import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Navbar() {
  
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <nav data-aos="fade" data-aos-delay="250">
      <div className="nav-container flex">
        <div className="nav-left flex">
          <div className="mobile flex">
            <div className="logo">
              <h2>Ayodeji-Faleye</h2>
            </div>
          </div>

          <div className="nav-links flex">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
        
              <Link to='/' className="route-links"  data-aos="fade-down >_hello">_hello</Link>
            </NavLink>
            <NavLink to="/about">

              <Link to="/about" className="route-links" data-aos="fade-down" data-aos-delay="350">_about-me</Link>
            </NavLink>
            <NavLink to="/projects">
        
              
              <Link to="/about" className="route-links" data-aos="fade-down" data-aos-delay="400">_projects</Link>
            </NavLink>
          </div>
        </div>

        <div className="nav-contact">
          <NavLink
            to="/contact-me"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
 
            <Link to="/about" className="route-links" data-aos="fade-down" data-aos-delay="450">_contact-me</Link>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
