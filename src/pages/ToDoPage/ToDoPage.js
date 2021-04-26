import React, { useState, useEffect } from "react";
import "./ToDoPage.css";
import { Container } from "react-bootstrap";
import ToDoInput from "../../components/ToDoInput/ToDoInput";
import ToDoList from "../../components/ToDoList/ToDoList";
import ToDoTabs from "../../components/ToDoTabs/ToDoTabs";
import TodoModel from "../../model/TodoModel";

export default function ToDoPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addNewTodo(todo) {
    setTodos(todos.concat(new TodoModel(todo, false)));
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
