import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, CardDeck, Card } from "react-bootstrap";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function App() {
  return (
    <Container>
      <Form.Group>
        <Form.Label>Level Display Message</Form.Label>
        <CardDeck>
          <Card style={{ textAlign: "center" }}>
            <Card.Body style={{ borderTop: "4px solid #4C9A78" }}>
              <Card.Title>Trovo User</Card.Title>
              <hr style={{ borderTop: "2px solid #4C9A78" }} />
              <Card.Text>
                <p>Level : 2</p>
                Points : 100
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Joined Stream Channel - 10/03/2021
              </small>
            </Card.Footer>
          </Card>
        </CardDeck>
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
        <Button variant="outline-primary">Reset Level</Button>{" "}
        <Button variant="outline-primary">Reset Points</Button>{" "}
      </Form.Group>
      <Form.Group style={{ textAlign: "center" }}>
        <Button variant="outline-danger">Delete User</Button>{" "}
      </Form.Group>
      <Button variant="danger">Delete All</Button>{" "}
    </Container>
  );
}

export default App;
