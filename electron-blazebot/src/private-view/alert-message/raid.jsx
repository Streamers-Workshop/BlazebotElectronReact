import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function ShowModalAddAlert(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Raid Alert Message
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control as="textarea" rows={9} style={{ resize: "none" }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success">Add</Button>
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
    <Container>
      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate Raid Alert"
          style={{ userSelect: "none" }}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Edit/Delete Raid Message</Form.Label>
        <Form.Control as="textarea" rows={8} style={{ resize: "none" }} />
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
        <Button onClick={() => setModalShow(true)} variant="outline-success">
          Add Alert
        </Button>{" "}
        <Button variant="outline-primary">Edit Alert</Button>{" "}
        <Button variant="outline-danger">Delete Alert</Button>{" "}
      </Form.Group>
      <ShowModalAddAlert show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}

export default App;
