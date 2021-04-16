import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Features } from "../../../../components/helpIcon/helpinfo";
import InfoIcon from "../../../../components/helpIcon/help";

function App() {
  return (
    <Container>
      <Form.Group>
        <h2>Hydrate</h2>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate Hydrate"
          style={{ userSelect: "none" }}
        />
      </Form.Group>
      <Form.Group>
        <InfoIcon
          name={Features[4].name}
          description={Features[4].description}
          trigger={Features[4].trigger}
          gif={Features[4].gif}
        />
      </Form.Group>
      <div style={{ textAlign: "center" }}>
        <Form.Group style={{ textAlign: "center" }}>
          <Form.Label>Hydrate Time Reminder - Number</Form.Label>
          <div style={{ margin: "0px 70px 15px 70px" }}>
            <Form.Control type="range" custom />
          </div>
          <Form.Group>
            <Form.Label>
              <i>Press Update to Change Time to Hydrate Reminder</i>
            </Form.Label>
          </Form.Group>
          <Button variant="outline-primary">Update</Button>{" "}
        </Form.Group>
      </div>
    </Container>
  );
}

export default App;
