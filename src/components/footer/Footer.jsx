import React, { useEffect } from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <footer>
      <div className="footer-left">
        <h2>Find me on:</h2>
        <a
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
        <a
          href="https://linkedin.com/in/ayodeji-faleye-0b683016a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer-right">
        <a
          href="https://github.com/Ayodejisamuel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>@Ayodejisamuel</span>
          <BsGithub />
        </a>

        
      </div>
    </footer>
  );
}

export default Footer;
