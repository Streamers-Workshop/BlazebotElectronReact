import React from "react";
import { BiHelpCircle } from "react-icons/bi";
import { Form, Modal, Button } from "react-bootstrap";

function DisplayHelp(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>What does the {props.name} do?</h5>
        <p>{props.description}</p>
        <h5>How to Trigger {props.name} in Trovo Chat?</h5>
        <p>{props.trigger}</p>
        <div style={{ textAlign: "center" }}>
          <img alt={props.name} src={props.gif} width="100" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function HelpComponent(props) {
  const [helpmodalShow, setHelpModalShow] = React.useState(false);

  return (
    <>
      <Form.Group>
        <BiHelpCircle size={30} onClick={() => setHelpModalShow(true)} />
      </Form.Group>
      <DisplayHelp
        show={helpmodalShow}
        onHide={() => setHelpModalShow(false)}
        name={props.name}
        description={props.description}
        trigger={props.trigger}
        gif={props.gif}
      />
    </>
  );
}

export default HelpComponent;
