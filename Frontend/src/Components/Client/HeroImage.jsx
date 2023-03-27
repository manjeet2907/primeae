import React from "react";
import { subsribbon } from "../../assets/images";

const HeroImage = ({ text }) => {
  return (
    <div
      className='heroimage'
      style={{
        backgroundImage: `url(${subsribbon})`,
        objectFit: "contain",
        height: "20rem",
        maxWidth: "100vw",
        backgroundPosition: "center",
        transform: "scaleX(-1)",
      }}>
      <p>{text}</p>
    </div>
  );
};

export default HeroImage;
