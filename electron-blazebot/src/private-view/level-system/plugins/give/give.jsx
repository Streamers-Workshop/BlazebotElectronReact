import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function App() {
  return (
    <Container>
      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate Give Points"
          style={{ userSelect: "none" }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Users</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          style={{
            textAlign: "center",
            backgroundColor: "white",
            resize: "none",
          }}
          disabled
        />
        <Form.Text className="text-muted">
          Enable/Disable User From Giving Points
        </Form.Text>
      </Form.Group>

      <Form.Group style={{ textAlign: "center" }}>
        <Button variant="outline-dark" style={{ marginRight: "3px" }}>
          <FaArrowAltCircleLeft />{" "}
        </Button>{" "}
        <Button variant="outline-dark" style={{ marginLeft: "3px" }}>
          <FaArrowAltCircleRight />{" "}
        </Button>{" "}
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
