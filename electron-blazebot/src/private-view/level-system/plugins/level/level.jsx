import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate Level Display"
          style={{ userSelect: "none" }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Level Display Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={1}
          style={{
            textAlign: "center",
            backgroundColor: "white",
            resize: "none",
          }}
        />
      </Form.Group>
      <Form.Group style={{ textAlign: "center" }}>
        <Button variant="outline-primary">Update/Save</Button>{" "}
        <Button variant="outline-success">Default Message</Button>{" "}
      </Form.Group>
      <Form.Group style={{ textAlign: "center" }}>
        <Form.Label>Chat Process XP - Number</Form.Label>
        <div style={{ margin: "0px 70px 15px 70px" }}>
          <Form.Control type="range" custom />
        </div>
        <Button variant="outline-primary">Update</Button>{" "}
      </Form.Group>
    </Container>
  );
}

export default App;
