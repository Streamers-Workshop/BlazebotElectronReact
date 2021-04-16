import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Features } from "../../../../components/helpIcon/helpinfo";
import InfoIcon from "../../../../components/helpIcon/help";

function App() {
  return (
    <Container>
      <Form.Group>
        <h2>Shout Out</h2>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate Shout Out"
          style={{ userSelect: "none" }}
        />
      </Form.Group>
      <Form.Group>
        <InfoIcon
          name={Features[7].name}
          description={Features[7].description}
          trigger={Features[7].trigger}
          gif={Features[7].gif}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Shout Out Message</Form.Label>
        <Form.Control type="text" placeholder="Shout Out Message" />
        <Form.Text className="text-muted">
          This is the Message that will be sent to the Trovo Chat
        </Form.Text>
      </Form.Group>
      <Form.Group style={{ textAlign: "center" }}>
        <Button variant="outline-primary">Update / Save</Button>{" "}
        <Button variant="outline-success">Default Message</Button>{" "}
      </Form.Group>
    </Container>
  );
}

export default App;
