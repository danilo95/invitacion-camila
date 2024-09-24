import React from "react";
import { Animated } from "react-animated-css";

import './mainContent.css'

export const MainContent = () => {
  return (
    <div className="main-content">

      <h1 className="main-text">Tenemos el gusto de invitarte al</h1>
      <h2 className="birthday-text">Cumpleaños de</h2>
      <Animated
        animationIn="bounceIn"
        isVisible={true}
        animationInDuration={1500}
      > 
      <h3 className="name">Camila</h3>
      </Animated>
    </div>
  );
};
