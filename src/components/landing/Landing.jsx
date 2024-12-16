import React, { useEffect } from "react";
import "./Landing.css";
import { FaGreaterThan } from "react-icons/fa";
import Game from "../game/Game";
import Aos from "aos";
import "aos/dist/aos.css";

function Landing() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="landing" data-aos="fade" data-aos-delay="250">
      <div className="landing-text">
        <div className="top-texts">
          <p data-aos="fade" data-aos-delay="600">
            Hi all, i'm
          </p>
          <h1 data-aos="fade" data-aos-delay="650">
            Ayodeji Faleye
          </h1>
          <h3 data-aos="fade" data-aos-delay="700">
            <FaGreaterThan />
            Frontend Engineer
          </h3>
        </div>

        <div className="bottom-text" data-aos="fade" data-aos-delay="750">
          <p>{"// wanna play a game?"}</p>
          <p>{"//play this out using your arrow keys"}</p>
          <div style={{ lineHeight: "30px" }}>
            <span>const</span>
            <span>githubLink</span>
            <span>=</span>
            <a
              href="https://tinyurl.com/edwrwte6"
              target="_blank"
              rel="noopener noreferrer"
            >
  'https://tinyurl.com/edwrwte6'
            </a>
          </div>
        </div>

        <div className="mobl">
          <p>{`//`} find my profile on Github:</p>
          <div>
            {" "}
            <span>const </span>
            <span> githubLink</span>
            <span>=</span>
            <a href="https://github.com/Ayodejisamuel">
              “https://github.com/Ayodejisamuel”
            </a>
          </div>
        </div>
      </div>

      {/* <Game className="game-disp" /> */}
    </div>
  );
}

export default Landing;
