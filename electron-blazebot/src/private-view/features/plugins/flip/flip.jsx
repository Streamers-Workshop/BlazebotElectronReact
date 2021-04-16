import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import { Features } from "../../../../components/helpIcon/helpinfo";
import InfoIcon from "../../../../components/helpIcon/help";
function App() {
  return (
    <Container>
      <Form.Group>
        <h2>Flip Coin</h2>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate Flip Coin"
          style={{ userSelect: "none" }}
        />
      </Form.Group>
      <Form.Group>
        <InfoIcon
          name={Features[1].name}
          description={Features[1].description}
          trigger={Features[1].trigger}
          gif={Features[1].gif}
        />
      </Form.Group>
      <Form.Group>
        <ListGroup style={{ textAlign: "center", userSelect: "none" }}>
          <ListGroup.Item>
            <Form.Group>
              <Form.Label>Heads</Form.Label>
              <Form.Control
                style={{ textAlign: "center" }}
                type="text"
                placeholder="Heads"
              />
            </Form.Group>
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Group>
              <Form.Label>Tail</Form.Label>
              <Form.Control
                style={{ textAlign: "center" }}
                type="text"
                placeholder="Tails"
              />
            </Form.Group>
          </ListGroup.Item>
        </ListGroup>
      </Form.Group>
      <Form.Group style={{ textAlign: "center" }}>
        <Button variant="outline-primary">Update Filp Coin Message</Button>{" "}
      </Form.Group>
    </Container>
  );
}

export default App;
