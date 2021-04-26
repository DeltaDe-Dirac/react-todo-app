import React from "react";
import "./ToDoList.css";
import { v4 as uuidv4 } from "uuid";
import { ListGroup } from "react-bootstrap";

export default function ToDoList({ todoList, toggleTodo }) {
  return (
    <>
      <ListGroup variant="flush" className="Todo-list">
        {todoList.map((todo) => (
          <ListGroup.Item variant="dark" key={uuidv4()}>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id={todo.id}
                onChange={(e) => toggleTodo(e.target.id)}
                checked={todo.isCompleted}
              ></input>
              <label className="form-check-label" htmlFor={todo.id}>
                {todo.text}
              </label>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
