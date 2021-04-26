import React, { useState } from "react";
import "./ToDoPage.css";
import { Container } from "react-bootstrap";
import ToDoInput from "../../components/ToDoInput/ToDoInput";
import ToDoList from "../../components/ToDoList/ToDoList";
import ToDoTabs from "../../components/ToDoTabs/ToDoTabs";

export default function ToDoPage() {
  const [todos, setTodos] = useState([
    "Buy products in a grocery store",
    " Schedule an appointment",
    "Send CV and get your next job",
    "Start your react final project",
    "Be patient, motivated, disciplined and kind",
    "Stay athletic and healthy",
  ]);

  function addNewTodo(todo) {
    console.log(todo);
    setTodos(todos.concat(todo));
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
          <ToDoList todoList={todos} />
        </div>
      </Container>
    </div>
  );
}
