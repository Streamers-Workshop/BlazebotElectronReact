import logo from "./trovologo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import * as bs from "react-bootstrap";
import data from "./processors/botcommands/botcommands.json";
import "./stylesheet.css";
import { CommandInput } from "./validation.js";
import Swal from "sweetalert2";

function displayCommands() {
  var elements = [];
  var count = 1;
  for (var cmd in data.commands) {
    elements.push(
      <>
        <bs.Col sm={4}>
          <bs.Nav variant="pills" className="flex-column">
            <bs.Nav.Item>
              <bs.Nav.Link eventKey={count}>{cmd}</bs.Nav.Link>
            </bs.Nav.Item>
          </bs.Nav>
        </bs.Col>

        <bs.Col sm={8}>
          <bs.Tab.Content>
            <bs.Tab.Pane eventKey={count}>{data.commands[cmd]}</bs.Tab.Pane>
          </bs.Tab.Content>
        </bs.Col>
      </>
    );
    count++;
  }
  return elements;
}

function AddModal(props) {
  return (
    <bs.Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <bs.Modal.Header closeButton>
        <bs.Modal.Title>
          <b>Add Command</b>
        </bs.Modal.Title>
      </bs.Modal.Header>
      <bs.Modal.Body>
        <bs.Form>
          <bs.Form.Group>
            <bs.Form.Label>
              <b>Command</b>
            </bs.Form.Label>
            <bs.Form.Control
              controlId="txtCommand"
              type="text"
              placeholder="eg. youtube"
            />
          </bs.Form.Group>

          <bs.Form.Group>
            <bs.Form.Label>
              <b>Command Output</b>
            </bs.Form.Label>
            <bs.Form.Group>
              <bs.Form.Control
                as="textarea"
                rows={6}
                placeholder="eg. subscribe to Bioblaze -  https://www.youtube.com/channel/UCBkmVxdnG66BWbQqfg-9whA"
              />
            </bs.Form.Group>
          </bs.Form.Group>
        </bs.Form>
      </bs.Modal.Body>
      <bs.Modal.Footer>
        <bs.Button variant="outline-primary">Submit</bs.Button>
        <bs.Button variant="outline-primary" onClick={props.onHide}>
          Close
        </bs.Button>
      </bs.Modal.Footer>
    </bs.Modal>
  );
}

function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <bs.Navbar bg="dark" variant="dark" expand="lg">
        <bs.Navbar.Brand href="#home">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block"
            alt="Blazebot"
          />
          &nbsp; Blazebot
        </bs.Navbar.Brand>
        <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <bs.Navbar.Collapse id="basic-navbar-nav">
          <bs.Nav className="mr-auto">
            <bs.Nav.Link path="">About</bs.Nav.Link>
            <bs.Nav.Link path="">Commands</bs.Nav.Link>
          </bs.Nav>
        </bs.Navbar.Collapse>
      </bs.Navbar>

      <bs.Container style={{ paddingBottom: 50 }}>
        <div style={{ paddingTop: 50, paddingBottom: 20 }}>
          <h1>Commands</h1>
          This section of the app is the Commands that can be used in Trovo Chat
          by the viewers.
        </div>
        <div
          className="dropdown-commands"
          style={{
            border: "1px solid #a9a9a9",
            padding: 30,
            marginBottom: 30,
            backgroundColor: "#f7f9fb",
          }}
        >
          <bs.Tab.Container defaultActiveKey="1">
            <bs.Row>{displayCommands()}</bs.Row>
          </bs.Tab.Container>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: 10 }}>
            <bs.Button
              size="lg"
              variant="outline-success"
              onClick={() => setModalShow(true)}
            >
              Add Command
            </bs.Button>
          </div>
          <AddModal show={modalShow} onHide={() => setModalShow(false)} />
          <bs.Button size="lg" variant="outline-primary">
            Edit Command
          </bs.Button>{" "}
          <bs.Button size="lg" variant="outline-danger">
            Delete Command
          </bs.Button>
        </div>
      </bs.Container>
    </>
  );
}

export default Home;
