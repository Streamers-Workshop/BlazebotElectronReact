import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import imgPfp from "./pfp.webp";

function App() {
  return (
    <Container style={{ marginTop: "80px", textAlign: "center" }}>
      <Form.Group>
        Once Logged in, your own bot is connected to your stream chat and would
        be able to interact with chat.
      </Form.Group>
      <Form.Group>
        <Button variant="outline-success">Connect Bot</Button>
      </Form.Group>
      <img
        src={imgPfp}
        alt="bot-pfp"
        className="rounded-pill"
        style={{ border: "2px solid #22c07b", marginBottom: "20px" }}
      />
      <br />
      <label>Bot is Connected</label>
    </Container>
  );
}

export default App;
