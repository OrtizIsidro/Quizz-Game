import React from "react";
import ReactDOM from "react-dom/client";
import ApplicationRouter from "./Router";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApplicationRouter />
    </Provider>
  </React.StrictMode>
);
