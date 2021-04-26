import React from "react";
import "./ToDoList.css";
import { v4 as uuidv4 } from "uuid";
import { Container, ListGroup } from "react-bootstrap";

export default function ToDoList({ todoList }) {
  return (
    <>
      <ListGroup variant="flush" className="Todo-list">
        {todoList.map((todo, index) => (
          <ListGroup.Item variant="dark" key={uuidv4()}>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id={`flexSwitchCheckDefault${index}`}></input>
              <label className="form-check-label" htmlFor={`flexSwitchCheckDefault${index}`}>
                {todo}
              </label>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
