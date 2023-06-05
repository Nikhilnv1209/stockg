import React from "react";
import "../styles/face.css";
const Face = () => {
  return (
    <div className="face__container">
      <div className="face__screen">
        <div>
          <h1>Your Security is our Priority</h1>
          <p>Just 2 steps & we are done</p>
        </div>
        <div>
          <img
            src="/facerec.png"
            alt="face recognition"
          />
          Face Recognition
        </div>
        <button className="start__button">
          Let's Start
        </button>
      </div>
    </div>
  );
};

export default Face;
