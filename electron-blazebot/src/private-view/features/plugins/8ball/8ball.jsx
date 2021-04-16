import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { Features } from "../../../../components/helpIcon/helpinfo";
import InfoIcon from "../../../../components/helpIcon/help";

function ShowModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add 8Ball New Message
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
        <h2>8ball</h2>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate 8Ball"
          style={{ userSelect: "none" }}
        />
      </Form.Group>
      <Form.Group>
        <InfoIcon
          name={Features[0].name}
          description={Features[0].description}
          trigger={Features[0].trigger}
          gif={Features[0].gif}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>8Ball Messages (Edit/Delete) - # Number</Form.Label>
        <Form.Control as="textarea" rows={7} style={{ resize: "none" }} />
      </Form.Group>
      <Form.Group style={{ textAlign: "center" }}>
        <Button onClick={() => setModalShow(true)} variant="outline-success">
          Add Message
        </Button>{" "}
        <Button variant="outline-primary">Edit Message</Button>{" "}
        <Button variant="outline-danger">Delete Message</Button>{" "}
      </Form.Group>
      <ShowModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}

export default App;
