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
        <Ticker contents={["REMINDER: Don't forget to upload your report duty form within TWO WEEKS of starting your practicum.",
          "REMINDER: Don't forget to pay your practicum fees via FIMS.",
          "Good luck with your internship."]} />
      </div>
    </div>
  );
}

export default App;
