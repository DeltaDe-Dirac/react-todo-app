import React from "react";
import "./ToDoList.css";
import { ListGroup } from "react-bootstrap";

export default function ToDoList() {
  return (
    <>
      <ListGroup variant="flush" className="Todo-list">
        <ListGroup.Item variant="dark">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault1"></input>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">
              Buy products in a grocery store
            </label>
          </div>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault2"></input>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">
              Schedule an appointment
            </label>
          </div>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault3"></input>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault3">
              Send CV and get your next job
            </label>
          </div>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault4"></input>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault4">
              Start your react final project
            </label>
          </div>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault5"></input>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault5">
              Be patient, motivated, disciplined and kind
            </label>
          </div>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault6"></input>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault6">
              Stay athletic and healthy
            </label>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
