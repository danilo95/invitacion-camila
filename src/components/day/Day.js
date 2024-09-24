import React, { useEffect, useState } from "react";
import "./day.css";

export const Day = ({ day, month }) => {
  const [count, setCount] = useState(+day + 20);

  useEffect(() => {
    if (count > 1) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 50);

      return () => clearInterval(timer);
    }
  }, [count]);
  return (
    <div className="day-container">
      <p className="day-number">{count.toString().padStart(2, '0')}</p>
      <p className="month-number">{month}</p>
    </div>
  );
};
