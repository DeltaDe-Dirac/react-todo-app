import React, { useState, createRef } from "react";
import { findDOMNode } from "react-dom";
import "./ToDoList.css";
import { v4 as uuidv4 } from "uuid";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function ToDoList({ todoList, toggleTodo, filter, removeTodo }) {
  const [toBeRemoved, setToBeRemoved] = useState(null);

  function findID(e) {
    // console.log(e);
    let id = null;
    const mouseOverNode = e.target;
    if (mouseOverNode.nodeName === "DIV") {
      if (mouseOverNode.id.split(";")[1]) {
        id = mouseOverNode.id.split(";")[1];
        // console.log("found DIV ID:", mouseOverNode.id.split(";")[1]);
      } else {
        const relTargetInput = e.relatedTarget;
        if (relTargetInput.nodeName === "DIV") {
          id = relTargetInput.id.split(";")[1];
          // console.log("found DIV related DIV ID:", relTargetInput.id.split(";")[1]);
        } else if (relTargetInput.nodeName === "INPUT") {
          id = relTargetInput.id;
          // console.log("found DIV related INPUT ID:", relTargetInput.id);
        } else if (relTargetInput.nodeName === "LABEL") {
          id = relTargetInput.htmlFor;
          // console.log("found DIV related LABEL HTMLFOR:", relTargetInput.htmlFor);
        }
      }
    } else if (mouseOverNode.nodeName === "INPUT") {
      id = mouseOverNode.id;
      // console.log("found INPUT ID:", mouseOverNode.id);
    } else if (mouseOverNode.nodeName === "LABEL") {
      id = mouseOverNode.htmlFor;
      // console.log("found LABEL HTMLFOR:", mouseOverNode.htmlFor);
    } else if (mouseOverNode.nodeName === "svg") {
      // console.log("SVG", toBeRemoved);
      id = toBeRemoved;
    } else {
      // console.log("not found", e);
      id = toBeRemoved;
    }

    return id;
  }

  return (
    <>
      <ListGroup variant="flush" className="Todo-list">
        {todoList
          .filter((todo) => (filter === "all" ? true : filter === "active" ? !todo.isCompleted : todo.isCompleted))
          .map((todo) => (
            <ListGroup.Item
              variant="dark"
              key={uuidv4()}
              id={`lgItem;${todo.id}`}
              onMouseOver={(e) => setToBeRemoved(findID(e))}
            >
              {toBeRemoved === todo.id ? (
                <FontAwesomeIcon className="showIcon" icon={faTimes} onClick={() => removeTodo(toBeRemoved)} />
              ) : (
                <FontAwesomeIcon className="hideIcon" icon={faTimes} onClick={() => removeTodo(toBeRemoved)} />
              )}
              <div className="form-check form-switch">
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
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
}
