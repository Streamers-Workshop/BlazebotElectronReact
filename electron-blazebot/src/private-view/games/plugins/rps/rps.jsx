import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Form, ListGroup, Button } from "react-bootstrap";
import { Games } from "../../../../components/helpIcon/helpinfo";
import InfoIcon from "../../../../components/helpIcon/help";

function App() {
  return (
    <Container>
      <Form.Group>
        <h2>Rock Paper Scissors</h2>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate RPS"
          style={{ userSelect: "none" }}
        />
      </Form.Group>
      <Form.Group>
        <InfoIcon
          name={Games[0].name}
          description={Games[0].description}
          trigger={Games[0].trigger}
          gif={Games[0].gif}
        />
      </Form.Group>
      <Form.Group>
        <ListGroup style={{ textAlign: "center", userSelect: "none" }}>
          <ListGroup.Item>
            <Form.Group>
              <Form.Label>Rock</Form.Label>
              <Form.Control
                style={{ textAlign: "center" }}
                type="text"
                placeholder="Rock"
              />
            </Form.Group>
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Group>
              <Form.Label>Paper</Form.Label>
              <Form.Control
                style={{ textAlign: "center" }}
                type="text"
                placeholder="Paper"
              />
            </Form.Group>
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Group>
              <Form.Label>Scissors</Form.Label>
              <Form.Control
                style={{ textAlign: "center" }}
                type="text"
                placeholder="Scissors"
              />
            </Form.Group>
          </ListGroup.Item>
        </ListGroup>
      </Form.Group>
      <Form.Group style={{ textAlign: "center" }}>
        <Button variant="outline-primary">Update RPS Message</Button>{" "}
      </Form.Group>
    </Container>
  );
}

export default App;
