import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

function App() {
  return (
    <Container>
      <Form.Group>
        <label>URL</label>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="outline-primary">Preview</Button>
            <Button variant="outline-primary">Copy</Button>
          </InputGroup.Prepend>
          <FormControl aria-describedby="basic-addon1" />
        </InputGroup>
      </Form.Group>

      <div style={{ textAlign: "center" }}>
        <label>Alert Test</label>
        <Form.Group>
          <Button variant="outline-success">Joined</Button>{" "}
          <Button variant="outline-success">Follow</Button>{" "}
          <Button variant="outline-success">Spell</Button>{" "}
          <Button variant="outline-success">Sub</Button>{" "}
          <Button variant="outline-success">Raid</Button>{" "}
        </Form.Group>
      </div>
    </Container>
  );
}

export default App;
