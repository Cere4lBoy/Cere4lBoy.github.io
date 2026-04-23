import React from "react";

export default function MaintenanceOverlay() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#ffffff",
        zIndex: 99999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem"
      }}
    >
      <div>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#222" }}>
          Portfolio in Progress
        </h1>
        <p style={{ fontSize: "1rem", marginBottom: "1.5rem", color: "#555" }}>
          I’m currently updating my portfolio. In the meantime, you can view my resume below.
        </p>
        <a
          href="https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "#6c63ff",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "600"
          }}
        >
          View Resume
        </a>
      </div>
    </div>
  );
}