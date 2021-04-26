import React from "react";
import "./ToDoTabs.css";
import { Nav, Badge } from "react-bootstrap";

export default function ToDoTabs({ todoList, applyFilter }) {
  return (
    <div className="Todo-tabs">
      <Nav variant="tabs" defaultActiveKey="all" onSelect={(selectedKey) => applyFilter(selectedKey)}>
        <Nav.Item>
          <Nav.Link eventKey="all">
            All <Badge variant="info">{todoList.length}</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="active">
            Active <Badge variant="danger">{todoList.filter((todo) => !todo.isCompleted).length}</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="completed">
            Completed <Badge variant="warning">{todoList.filter((todo) => todo.isCompleted).length}</Badge>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
