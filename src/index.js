import React from "react";
import ReactDOM from "react-dom/client";
import ApplicationRouter from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApplicationRouter />
  </React.StrictMode>
);
