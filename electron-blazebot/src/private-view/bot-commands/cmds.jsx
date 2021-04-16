import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Container,
  Modal,
  Button,
  Form,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Command
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          as="textarea"
          rows={7}
          placeholder="Edit Command"
          style={{ resize: "none" }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Edit</Button>
        <Button variant="outline-primary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container style={{ marginTop: "35px" }}>
      <Form.Group>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="command">Command: !</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Enter Command"
            aria-label="Enter Command"
            aria-describedby="command"
          />
        </InputGroup>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Enter Command Message"
          style={{ resize: "none" }}
        />
      </Form.Group>
      <Form.Group style={{ textAlign: "center" }}>
        <Button variant="success">Add Command</Button>{" "}
      </Form.Group>

      <hr />

      <Form.Group>
        <Form.Label>Commands</Form.Label>
        <Card>
          <Card.Header as="h5">Trovo</Card.Header>
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec.
            </Card.Text>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Edit
            </Button>{" "}
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </Form.Group>

      <Form.Group>
        <Card>
          <Card.Header as="h5">Trovo2</Card.Header>
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec.
            </Card.Text>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Edit
            </Button>{" "}
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </Form.Group>

      <hr />

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
}

export default App;
