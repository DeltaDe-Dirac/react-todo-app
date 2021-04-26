import React from "react";
import "./ToDoPage.css";
import { Container } from "react-bootstrap";
import ToDoInput from "../../components/ToDoInput/ToDoInput";
import ToDoList from "../../components/ToDoList/ToDoList";
import ToDoTabs from "../../components/ToDoTabs/ToDoTabs";

export default function ToDoPage() {
  return (
    <Container>
      <div className="Todo-page-input">
        <ToDoInput />
      </div>
      <div className="Todo-page-tabs">
        <ToDoTabs />
      </div>
      <div className="Todo-page-list">
        <ToDoList />
      </div>
    </Container>
  );
}
