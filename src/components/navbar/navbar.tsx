import React from "react";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <h1>Mi App</h1>
      </div>
      <div style={styles.links}>
        <a href="#home" style={styles.link}>
          Home
        </a>
        <a href="#about" style={styles.link}>
          About
        </a>
        <a href="#services" style={styles.link}>
          Services
        </a>
        <a href="#contact" style={styles.link}>
          Contact
        </a>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#2A9D8F", // Verde Pokémon
    color: "#fff",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    transition: "0.3s",
  },
};

export default Navbar;
