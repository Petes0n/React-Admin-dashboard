import React from "react";
import "./success.scss";
import success from "../../animations/success.json";
import lottie from "lottie-react";
import Lottie from "lottie-react";

export default function Success() {
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="modal">
          <div className="modalContent">
            <div className="modalContent">
            <Lottie animationData={success} className='animation'/>              
            <h4>Success.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
