import React from "react";
import "./App.css";

import ToDoPage from "./pages/ToDoPage/ToDoPage";
// import ReactLogo from "./components/ReactLogo/ReactLogo";

export default function App() {
  return (
    <div className="App">
      <ToDoPage />
      {/* <ReactLogo /> */}
    </div>
  );
}
