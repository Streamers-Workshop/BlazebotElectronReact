import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, ListGroup, Button } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate Add Points"
          style={{ userSelect: "none" }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Permissison</Form.Label>
        <ListGroup style={{ textAlign: "center", userSelect: "none" }}>
          <ListGroup.Item>
            <Form.Check id="toggle-creator" type="switch" />
            Creator{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check id="toggle-moderator" type="switch" />
            Moderator
          </ListGroup.Item>
        </ListGroup>
      </Form.Group>
      <Form.Group style={{ textAlign: "center" }}>
        <Form.Label>Limit Points - Number</Form.Label>
        <div style={{ margin: "0px 70px 15px 70px" }}>
          <Form.Control type="range" custom />
        </div>
        <Button variant="outline-primary">Update</Button>{" "}
      </Form.Group>
    </Container>
  );
}

export default App;
