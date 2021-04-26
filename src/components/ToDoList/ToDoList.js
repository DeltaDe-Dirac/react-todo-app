import React, { useState } from "react";
import "./ToDoList.css";
import { v4 as uuidv4 } from "uuid";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function ToDoList({ todoList, toggleTodo, filter, removeTodo }) {
  const [toBeRemoved, setToBeRemoved] = useState(null);

  return (
    <>
      <ListGroup variant="flush" className="Todo-list">
        {todoList
          .filter((todo) => (filter === "all" ? true : filter === "active" ? !todo.isCompleted : todo.isCompleted))
          .map((todo) => (
            <ListGroup.Item variant="dark" key={uuidv4()}>
              <div
                className="form-check form-switch"
                onMouseEnter={(e) => setToBeRemoved(e.target.children.length ? e.target.children[0].id : null)}
                onMouseLeave={() => setToBeRemoved(null)}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={todo.id}
                  onChange={(e) => toggleTodo(e.target.id)}
                  checked={todo.isCompleted}
                ></input>

                <label className={"form-check-label ".concat(todo.isCompleted ? "completed" : "")} htmlFor={todo.id}>
                  {todo.text}
                </label>
                <span className="deleteToDo">
                  {toBeRemoved === todo.id ? (
                    <FontAwesomeIcon icon={faTimes} onClick={() => removeTodo(toBeRemoved)} />
                  ) : null}
                </span>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
}
