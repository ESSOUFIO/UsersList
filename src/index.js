import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UsersProvider from "./Context/UsersContext";
import UIProvider from "./Context/UIContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UIProvider>
      <UsersProvider>
        <App />
      </UsersProvider>
    </UIProvider>
  </React.StrictMode>
);
