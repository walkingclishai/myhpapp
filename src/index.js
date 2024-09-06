import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Characters from "./pages/Characters";
import Spells from "./pages/Spells";
import Houses from "./pages/Houses";
import Dashboard from "./pages/Dashboard";
import Fullcharacter from "./pages/Fullcharacter";
import Results from "./pages/Results";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/fullcharacter" element={<Fullcharacter />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
