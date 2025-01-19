import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Adjust path if App.jsx is in components (e.g., "./components/App")
import "./index.css"; // Import global styles

// Render the root React component (App) to the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);