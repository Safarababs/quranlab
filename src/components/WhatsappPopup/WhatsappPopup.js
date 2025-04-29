import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#25D366",
          color: "white",
          border: "none",
          padding: "15px",
          borderRadius: "50px",
          fontSize: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaWhatsapp />
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "0",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <p>Chat with us on WhatsApp!</p>
          <a
            href="https://wa.me/923238235301?text=Assalam%20o%20Alaikum!%20I%20am%20sending%20you%20this%20message%20from%20your%20website%20and%20I%20want%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Chat
          </a>
        </div>
      )}
    </div>
  );
};

export default WhatsAppPopup;
