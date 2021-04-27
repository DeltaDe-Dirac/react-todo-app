import { createRef } from "react";
import { findDOMNode } from "react-dom";
import "./ToDoInput.css";
import { InputGroup, FormControl } from "react-bootstrap";

export default function ToDoInput({ addNewTodo }) {
  const formRef = createRef();

  function handleKeyPressed(e) {
    if (e.target.value && e.charCode === 13) {
      addNewTodo(e.target.value);
      findDOMNode(formRef.current).value = "";
    }
  }

  return (
    <>
      <h1 className="Todo-title text-center">My List of ToDos</h1>
      <InputGroup className="Todo-input" size="lg">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">New ToDo</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="What's Next?"
          ref={formRef}
          onKeyPress={(e) => handleKeyPressed(e)}
        />
      </InputGroup>
    </>
  );
}
