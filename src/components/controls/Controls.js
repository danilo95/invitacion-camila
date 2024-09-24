import React from "react";
import "./control.css";

export const Controls = () => {
  const openGoogleMaps = () => {
    const url =
      "https://www.google.com/maps/place/Villas+de+Pamplona/@13.8253654,-89.283121,114m/data=!3m1!1e3!4m6!3m5!1s0x8f63237f168dd8e1:0x41bea46379c8f0b7!8m2!3d13.8247215!4d-89.2836537!16s%2Fg%2F1thd7r4c?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D";

    window.open(url, "_blank");
  };

  const sendWhatsAppMessage = () => {
    const phoneNumber = "1234567890"; 
    const message = "Confirmo mi asistencia al evento";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank"); 
  };

  return (
    <div className="controls-container">
      <button className="control-button" onClick={sendWhatsAppMessage}>Confirmar Asistencia</button>
      <button className="control-button" onClick={openGoogleMaps}>Ubicacion</button>
    </div>
  );
};
