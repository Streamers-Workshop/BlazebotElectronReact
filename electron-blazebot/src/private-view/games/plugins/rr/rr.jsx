import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Form } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Form.Group>
        <h2>Russian Roulette</h2>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate RR"
          style={{ userSelect: "none" }}
        />
      </Form.Group>
    </Container>
  );
}

export default App;
