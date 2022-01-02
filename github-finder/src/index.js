import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <AlertProvider>
        <Router>
          <App />
        </Router>
      </AlertProvider>
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
