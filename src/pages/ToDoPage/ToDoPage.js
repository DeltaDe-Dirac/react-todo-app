import React, { useState } from "react";
import "./ToDoPage.css";
import { Container } from "react-bootstrap";
import ToDoInput from "../../components/ToDoInput/ToDoInput";
import ToDoList from "../../components/ToDoList/ToDoList";
import ToDoTabs from "../../components/ToDoTabs/ToDoTabs";

export default function ToDoPage() {
  const [newTodo, setNewTodo] = useState();

  function addNewTodo(todo) {
    alert(todo);
  }

  return (
    <div className="Todo-page">
      <Container>
        <div className="Todo-page-input">
          <ToDoInput addNewTodo={addNewTodo} />
        </div>
        <div className="Todo-page-tabs">
          <ToDoTabs />
        </div>
        <div className="Todo-page-list">
          <ToDoList />
        </div>
      </Container>
    </div>
  );
}
