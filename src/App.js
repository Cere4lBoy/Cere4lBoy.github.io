import React from "react";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  // const maintenanceMode = false;
  const maintenanceMode = true;

  if (maintenanceMode) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem"
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              color: "#222"
            }}
          >
            Portfolio currently being updated
          </h1>

          <p
            style={{
              fontSize: "1rem",
              marginBottom: "1.5rem",
              color: "#555",
              maxWidth: "500px"
            }}
          >
            I’m currently refining my portfolio website. In the meantime, you can
            view my latest resume below.
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

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;