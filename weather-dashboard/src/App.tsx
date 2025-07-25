// src/App.tsx
import React from "react";

import "./App.css";

import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <div className="app">
      <Dashboard />
    </div>
  );
};

export default App;
