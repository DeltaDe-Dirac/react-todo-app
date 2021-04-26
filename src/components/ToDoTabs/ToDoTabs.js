import React from "react";
import "./ToDoTabs.css";
import { Nav, Badge } from "react-bootstrap";

export default function ToDoTabs() {
  return (
    <div className="Todo-tabs">
      <Nav variant="tabs" defaultActiveKey="all">
        <Nav.Item>
          <Nav.Link eventKey="all">
            All <Badge variant="info">9</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="active">
            Active <Badge variant="danger">6</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="completed">
            Completed <Badge variant="warning">3</Badge>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
