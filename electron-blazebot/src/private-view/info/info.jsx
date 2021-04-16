import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ListGroup, Badge, Form, Button } from "react-bootstrap";
import Features from "../features/plugins.js";
import Games from "../games/plugins.js";
import Alerts from "../alert-message/alerts.js";
import LevelSystem from "../level-system/levelsystem.js";

function App() {
  return (
    <Container>
      <Form.Group>
        <Button variant="outline-primary">Check for Updates</Button>
      </Form.Group>
      <hr />
      <div style={{ textAlign: "center" }}>
        <Form.Label>
          <u>Features</u>
        </Form.Label>
        <Form.Group>
          <ListGroup>
            {Features.map((value, index) => {
              if (value.activated) {
                return (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {value.name}
                    <Badge variant="success">Activated</Badge>
                  </ListGroup.Item>
                );
              } else {
                return (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {value.name}
                    <Badge variant="danger">Deactivated</Badge>
                  </ListGroup.Item>
                );
              }
            })}
          </ListGroup>
        </Form.Group>
        <Form.Label>
          <u>Games</u>
        </Form.Label>
        <Form.Group>
          <ListGroup>
            {Games.map((value, index) => {
              if (value.activated) {
                return (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {value.name}
                    <Badge variant="success">Activated</Badge>
                  </ListGroup.Item>
                );
              } else {
                return (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {value.name}
                    <Badge variant="danger">Deactivated</Badge>
                  </ListGroup.Item>
                );
              }
            })}
          </ListGroup>
        </Form.Group>
        <Form.Label>
          <u>Alert Message</u>
        </Form.Label>
        <Form.Group>
          <ListGroup>
            {Alerts.map((value, index) => {
              if (value.activated) {
                return (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {value.name}
                    <Badge variant="success">Activated</Badge>
                  </ListGroup.Item>
                );
              } else {
                return (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {value.name}
                    <Badge variant="danger">Deactivated</Badge>
                  </ListGroup.Item>
                );
              }
            })}
          </ListGroup>
        </Form.Group>
        <Form.Label>
          <u>Level System</u>
        </Form.Label>
        <Form.Group>
          <ListGroup>
            {LevelSystem.map((value, index) => {
              if (value.activated) {
                return (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {value.name}
                    <Badge variant="success">Activated</Badge>
                  </ListGroup.Item>
                );
              } else {
                return (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {value.name}
                    <Badge variant="danger">Deactivated</Badge>
                  </ListGroup.Item>
                );
              }
            })}
          </ListGroup>
        </Form.Group>
      </div>
    </Container>
  );
}

export default App;
