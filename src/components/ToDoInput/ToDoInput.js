import React from "react";
import "./ToDoInput.css";
import { Container, InputGroup, FormControl } from "react-bootstrap";

export default function ToDoInput() {
  return (
    <>
      <h1 className="Todo-title text-center">My List of ToDos</h1>
      <InputGroup className="Todo-input" size="lg">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">Enter ToDo</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="What's Next?" />
      </InputGroup>
    </>
  );
}
