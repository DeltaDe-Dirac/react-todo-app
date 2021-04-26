import React, { useState, useEffect } from "react";
import "./ToDoPage.css";
import { Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import ToDoInput from "../../components/ToDoInput/ToDoInput";
import ToDoList from "../../components/ToDoList/ToDoList";
import ToDoTabs from "../../components/ToDoTabs/ToDoTabs";
import TodoModel from "../../model/TodoModel";

export default function ToDoPage() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

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
    setTodos(todos.concat(new TodoModel(uuidv4(), todo, false)));
  }

  function toggleTodo(todoId) {
    const todoIndex = getIndexById(todoId);

    if (todoIndex === -1) {
      return;
    }

    todos[todoIndex].isCompleted = !todos[todoIndex].isCompleted;
    setTodos([...todos]);
  }

  function removeTodo(todoId) {
    const todoIndex = getIndexById(todoId);

    if (todoIndex === -1) {
      return;
    }

    todos.splice(todoIndex, 1);
    setTodos([...todos]);
  }

  function getIndexById(todoId) {
    let i = 0;

    for (i = 0; i < todos.length; i++) {
      if (todos[i].id === todoId) {
        return i;
      }
    }

    console.error("can't find ToDo by ID: ", todoId);
    return -1;
  }

  return (
    <div className="Todo-page">
      <Container>
        <div className="Todo-page-input">
          <ToDoInput addNewTodo={addNewTodo} />
        </div>
        <div className="Todo-page-tabs">
          <ToDoTabs todoList={todos} applyFilter={setFilter} />
        </div>
        <div className="Todo-page-list">
          <ToDoList todoList={todos} toggleTodo={toggleTodo} filter={filter} removeTodo={removeTodo} />
        </div>
      </Container>
    </div>
  );
}
