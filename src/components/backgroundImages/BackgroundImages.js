import React from "react";
import { Animated } from "react-animated-css";
import bg02 from "../../assets/bg02.png";
import bg03 from "../../assets/bg03.png";
import bg04 from "../../assets/bg04.png";
import bg05 from "../../assets/bg05.png";
import bg06 from "../../assets/bg06.png";

import "./backgroundimages.css";

export const BackgroundImages = () => {
  return (
    <div className="background-images">
      <Animated
        animationIn="rotateInDownLeft"
        isVisible={true}
        className="corner top-left"
      >
        <img
          src={bg02}
          className="corner top-left background-images-img"
          alt="corner decoration"
        />
        <img
          src={bg06}
          className="corner top-left color-background"
          alt="corner decoration"
        />
      </Animated>
      <Animated
        animationIn="rotateInDownRight"
        isVisible={true}
        className="corner top-right"
        style={{ position: "absolute" }}
      >
        <img
          src={bg02}
          className="corner top-right background-images-img"
          alt="corner decoration"
        />
        <img
          src={bg06}
          className="corner top-right background-images-img color-background"
          alt="corner decoration"
        />
      </Animated>
      <Animated
        animationIn="bounceInLeft"
        isVisible={true}
        className="corner center-left"
        style={{ position: "absolute" }}
      >
        <img
          src={bg03}
          className="side center-left background-images-img"
          alt="side decoration"
        />
        <img
          src={bg06}
          className="corner center-left background-images-img color-background"
          alt="corner decoration"
        />
      </Animated>
      <Animated
        animationIn="bounceInRight"
        isVisible={true}
        className="corner center-right"
        style={{ position: "absolute" }}
      >
        <img
          src={bg03}
          className="side center-right background-images-img"
          alt="side decoration"
        />
        <img
          src={bg06}
          className="corner center-right background-images-img color-background"
          alt="corner decoration"
        />
      </Animated>
      <Animated
        animationIn="bounceInUp"
        isVisible={true}
        className="corner bottom-left"
        style={{ position: "absolute" }}
      >
        <img
          src={bg04}
          className="corner bottom-left background-images-img"
          alt="corner decoration"
        />
        <img
          src={bg06}
          className="corner bottom-left background-images-img color-background"
          alt="corner decoration"
        />
      </Animated>
      <Animated
        animationIn="bounceInUp"
        isVisible={true}
        className="corner bottom-right"
        style={{ position: "absolute" }}
      >
        <img
          src={bg05}
          className="corner bottom-right background-images-img"
          alt="corner decoration"
        />
        <img
          src={bg06}
          className="corner bottom-right background-images-img color-background"
          alt="corner decoration"
        />
      </Animated>
    </div>
  );
};
