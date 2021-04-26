import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";

import ToDoPage from "./pages/ToDoPage/ToDoPage";

export default function App() {
  return (
    <Container className="App">
      <ToDoPage />
      {/* <ReactLogo /> */}
    </Container>
  );
}
