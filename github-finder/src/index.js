import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { GithubProvider } from './context/github/GithubContext';

ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <Router>
        <App />
      </Router>
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

