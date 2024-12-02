"use client";

export default function Home() {
  return (
    <div
      style={{
        width: "600px",
        height: "900px",
        margin: "auto",
        padding: "20px",
        background: "#FFA07A",
        border: "10px solid #222",
        borderRadius: "30px",
        position: "relative",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Título con la fuente "Press Start 2P" */}
      <h1
        style={{
          fontFamily: "'Press Start 2P', cursive",
          fontSize: "30px",
          textAlign: "center",
          color: "#222",
          marginBottom: "20px",
        }}
      >
        Bienvenido al Chat Pokémon! <br /> Primera generación
      </h1>

      {/* Chatbox (iframe) directamente debajo del título */}
      <div
        style={{
          border: "5px solid #444",
          borderRadius: "15px",
          overflow: "hidden",
          width: "100%",
          height: "80%",
          backgroundColor: "#fff",
          marginTop: "20px",
          position: "relative",
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
    </div>
  );
}
