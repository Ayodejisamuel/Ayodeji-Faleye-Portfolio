import React, { useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

function ReUseCon() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="about-contact" data-aos="zoom-in">
      <p
        style={{
          display: "inline-flex",
          alignItems: "center",
          color: "white",
          gap: ".5rem",
        }}
      >
        <AiFillCaretDown />
        contacts
      </p>
      <a href="mailto:ayodejisamuel80.com">
        <FiMail />
        ayodejisamuel80@gmail.com
      </a>
      <a href="tel:08078147513">
        <IoIosCall />
        +2348078147513
      </a>
    </div>
  );
}

export default ReUseCon;
