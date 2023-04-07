import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/App.css";

import App from "routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
