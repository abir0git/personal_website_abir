import React from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate, HashRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
        // <HashRouter>
          <App />
        // </HashRouter>
);