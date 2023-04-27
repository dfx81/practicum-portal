import React from "react";
import "./css/style.css";

import Sidebar from "./components/Sidebar";
import Ticker from "./components/Ticker";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Sidebar isMobile={true} />
      <Sidebar isMobile={false} />
      <div className="content">
        <main className="main">
          <Outlet />
        </main>
        <Ticker />
      </div>
    </div>
  );
}

export default App;
