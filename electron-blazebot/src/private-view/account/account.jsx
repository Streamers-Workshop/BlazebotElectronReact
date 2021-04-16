import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import icontest from "./test.webp";

function App() {
  return (
    <Container>
      <Form.Group>
        <label>Trovo Account</label>
        <br />
        <img
          src={icontest}
          alt="account"
          className="rounded-pill"
          style={{ border: "2px solid #378664" }}
        />
      </Form.Group>

      <Form.Group className="form-group" style={{ marginTop: "6%" }}>
        <div className="shadow-lg p-3 mb-3 bg-white rounded">
          Name: <span style={{ color: "#298D61" }}>IAmNotLeo</span>
        </div>
        <div className="shadow-lg p-3 mb-3 bg-white rounded">
          Followers: <span style={{ color: "#298D61" }}>20</span>
        </div>
        <div className="shadow-lg p-3 mb-3 bg-white rounded">
          Subscribers: <span style={{ color: "#298D61" }}>30</span>
        </div>
      </Form.Group>

      <Form.Group style={{ textAlign: "center" }}>
        <Button variant="outline-success">Sign Out</Button>
      </Form.Group>
    </Container>
  );
}

export default App;
