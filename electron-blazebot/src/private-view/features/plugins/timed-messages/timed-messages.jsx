import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Form, Button, Modal, Card } from "react-bootstrap";
import { Features } from "../../../../components/helpIcon/helpinfo";
import InfoIcon from "../../../../components/helpIcon/help";

function ShowAddModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Timed Message
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

function ShowEditModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Timed Message
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
  const [modalEditShow, setEditModalShow] = React.useState(false);

  return (
    <Container>
      <Form.Group>
        <h2>Timed Messages</h2>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate Timed Messages"
          style={{ userSelect: "none" }}
        />
      </Form.Group>
      <Form.Group>
        <InfoIcon
          name={Features[9].name}
          description={Features[9].description}
          trigger={Features[9].trigger}
          gif={Features[9].gif}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Time Set - Number#</Form.Label>
        <div style={{ margin: "0px 70px 15px 70px" }}>
          <Form.Control type="range" custom />
        </div>
      </Form.Group>
      <Form.Group style={{ textAlign: "center" }}>
        <Button variant="outline-primary">Update</Button>{" "}
      </Form.Group>

      <Form.Group>
        <Form.Label>Timed Messages</Form.Label>
        <Form.Group>
          <Button onClick={() => setModalShow(true)} variant="outline-success">
            Add Message
          </Button>
        </Form.Group>
        <ShowAddModal show={modalShow} onHide={() => setModalShow(false)} />
        <Card>
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec.
            </Card.Text>
            <Button variant="primary" onClick={() => setEditModalShow(true)}>
              Edit
            </Button>{" "}
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </Form.Group>

      <Form.Group>
        <Card>
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec.
            </Card.Text>
            <Button variant="primary" onClick={() => setEditModalShow(true)}>
              Edit
            </Button>{" "}
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </Form.Group>
      <ShowEditModal
        show={modalEditShow}
        onHide={() => setEditModalShow(false)}
      />
    </Container>
  );
}

export default App;
