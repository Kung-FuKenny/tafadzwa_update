import React from "react";
import "./Feature.css";
// import { FaAccessibleIcon } from "react-icons/fa";
import { BsHexagon } from "react-icons/bs";

const Feature = ({ heading, text }) => {
  return (
    <div className="feature">
      {/* <div className="feature-icon">
        <BsHexagon color="#4b4586" size={55} />
        <div className="inner-icon">{icon}</div>
      </div> */}

      <div className="feature-text">
        <h3>{heading}</h3>
        <p className="u-text-small">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
