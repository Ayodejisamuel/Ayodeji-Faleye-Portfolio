import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Bio() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <article className="bio">
      <h2>_Bio</h2>
      <p>
        Hi, I'm Ayodeji, a frontend engineer passionate about creating immersive
        digital experiences. With over 2 years of experience, I specialize in HTML,
        CSS, and JavaScript with React for crafting user-friendly websites with a focus on
        aesthetics and functionality. Proficient in React.js and NextJs to build
        scalable web applications and collaborate effectively using Git and
        agile methodologies. Let's connect and bring your ideas to life!
      </p>
    </article>
  );
}

export default Bio;
