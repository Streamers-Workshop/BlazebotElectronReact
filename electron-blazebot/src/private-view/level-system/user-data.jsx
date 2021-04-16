import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, ListGroup } from "react-bootstrap";

function App() {
  return (
    <Container style={{ marginTop: "6vh" }}>
      <p>
        A Level and Points System for Viewers to gain points and level up by
        interacting in Trovo Chat.
      </p>

      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate Level and Points System"
          style={{ userSelect: "none" }}
        />
      </Form.Group>
      <p>
        <u>Commands</u>
      </p>
      <Form.Group>
        <ListGroup style={{ fontFamily: "Arial" }}>
          <ListGroup.Item>
            <b>!level / !level @username</b> - View your own Level / Viewer's
            Level
          </ListGroup.Item>
          <ListGroup.Item>
            <b>!points / !points @username</b> - View your own Points / Viewer's
            Points
          </ListGroup.Item>
          <ListGroup.Item>
            <b>!add @username</b> - (Creator/Moderator) Add Points to Viewer's
            Balance
          </ListGroup.Item>
          <ListGroup.Item>
            <b>!give @username</b> - Give Your Points to Viewer
          </ListGroup.Item>
        </ListGroup>
      </Form.Group>
    </Container>
  );
}

export default App;
