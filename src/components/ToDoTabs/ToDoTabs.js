import React from "react";
import "./ToDoTabs.css";
import { Nav, Badge } from "react-bootstrap";

export default function ToDoTabs() {
  return (
    <div className="Todo-tabs">
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="all">
            All <Badge variant="secondary">9</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="active">
            Active <Badge variant="secondary">6</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="completed">
            Completed <Badge variant="secondary">3</Badge>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
