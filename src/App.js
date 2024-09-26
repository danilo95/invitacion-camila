import React, { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import Confetti from "react-confetti";
import {
  BackgroundImages,
  MainContent,
  BorderedText,
  Day,
  Direction,
  Controls,
} from "./components";
import "./App.css"; // Estilos personalizados

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hacer desaparecer el confeti después de 5 segundos
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {showConfetti && <Confetti />}

      <BackgroundImages />
      <Animated
        animationIn="fadeIn"
        isVisible={true}
      > 
      <div className="content">
        <MainContent />
        <div className="day-content">
          <BorderedText text="Domingo" />
          <Day day="01" month="Diciembre" />
          <BorderedText text="3:00 P.M." />
        </div>
        <Direction direction="Residencial Villas de Pamplona, Quezaltepeque, La Libertad, Casa Club." />
        <Controls />
      </div>
      </Animated>
    </div>
  );
}

export default App;
