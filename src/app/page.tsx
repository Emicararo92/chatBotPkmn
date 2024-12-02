"use client";

import { useState } from "react";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Función para alternar el estado del chat (abrir/cerrar)
  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div
      style={{
        width: "600px",
        height: "900px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#fff",
        border: "10px solid #222",
        borderRadius: "30px",
        position: "relative",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        backgroundImage:
          "url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Botón para abrir/cerrar el chat */}
      <button
        onClick={toggleChat}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "10px 20px",
          backgroundColor: "#FF5100", // Naranja
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "0.3s",
        }}
      >
        {isChatOpen ? "Cerrar Chat" : "Abrir Chat"}
      </button>

      {/* Solo se muestra el chat si isChatOpen es true */}
      {isChatOpen && (
        <div
          style={{
            border: "5px solid #444",
            borderRadius: "15px",
            overflow: "hidden",
            width: "100%",
            height: "80%",
            backgroundColor: "#fff",
            marginTop: "50px", // Espacio desde el botón
          }}
        >
          <iframe
            src="https://www.stack-ai.com/public_form/13ddbd3a-8ac2-491e-8220-5b8b586abc41/ba77a5b4-722a-41df-8289-279194daf5b6/674de2a6ed6313520e2ce66d"
            width="100%"
            height="100%"
            title="Chatbot"
            allow="clipboard-read; clipboard-write"
            style={{ border: "none", borderRadius: "10px" }}
          ></iframe>
        </div>
      )}
    </div>
  );
}
