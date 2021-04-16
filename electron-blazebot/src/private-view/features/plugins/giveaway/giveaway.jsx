import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import Swal from "sweetalert2";
import { Container, Form, Button, Modal, Spinner } from "react-bootstrap";
import { Features } from "../../../../components/helpIcon/helpinfo";
import InfoIcon from "../../../../components/helpIcon/help";
import Chance from "chance";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const testing = [
  "testing1",
  "testing2",
  "testing3",
  "testing4",
  "testing5",
  "testing6",
  "testing7",
  "testing8",
  "testing9",
  "testing10",
];
let winner;

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

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
          Giveaway List
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group style={{ textAlign: "center" }}>
          <Form.Label>Joined</Form.Label>
          <Form.Control
            as="select"
            multiple
            style={{
              height: "160px",
              textAlign: "center",
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group style={{ textAlign: "center" }}>
          <Form.Label>Winners</Form.Label>
          <Form.Control
            as="select"
            multiple
            style={{
              height: "80px",
              textAlign: "center",
            }}
          ></Form.Control>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default class Fireworks extends React.Component {
  constructor(props) {
    super(props);
    this.isAnimationEnabled = false;
    this.animationInstance = null;
    this.intervalId = null;
    this.state = {
      modal: false,
      btndisabled: false,
      winnerDisplay: false,
    };
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
  }

  getAnimationSettings(originXA, originXB) {
    return {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 50,
      origin: {
        x: randomInRange(originXA, originXB),
        y: Math.random() - 0.2,
      },
    };
  }

  nextTickAnimation = () => {
    this.animationInstance &&
      this.animationInstance(this.getAnimationSettings(0.1, 0.3));
    this.animationInstance &&
      this.animationInstance(this.getAnimationSettings(0.7, 0.9));
  };

  startAnimation() {
    if (testing.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Giveaway Empty",
        text: "Users Have to Join the Giveaway",
      });
    } else {
      if (!this.isAnimationEnabled) {
        this.isAnimationEnabled = true;
        this.setState({ btndisabled: true });
        this.setState({ winnerDisplay: true });
        winner = Chance.Chance().pickone(testing);
        testing.splice(testing.indexOf(winner), 1);
        this.intervalId = setInterval(this.nextTickAnimation, 800);
        setTimeout(() => {
          this.pauseAnimation();
          this.setState({ btndisabled: false });
          this.setState({ winnerDisplay: false });
        }, 10000);
      }
    }
  }

  pauseAnimation() {
    this.isAnimationEnabled = false;
    return this.intervalId && clearInterval(this.intervalId);
  }

  handlerClickStart = () => {
    this.startAnimation();
  };
  handleShowModal() {
    this.setState({ modal: true });
  }

  handleHideModal() {
    this.setState({ modal: false });
  }

  componentWillUnmount() {
    this.isAnimationEnabled = false;
    this.intervalId && clearInterval(this.intervalId);
  }

  getInstance = (instance) => {
    this.animationInstance = instance;
  };
  render() {
    let btnDisplayButton;
    let winnerSelected;
    if (this.state.btndisabled) {
      btnDisplayButton = (
        <Button variant="outline-primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />{" "}
          Loading...
        </Button>
      );
    } else {
      btnDisplayButton = (
        <Button onClick={this.handlerClickStart} variant="outline-primary">
          Display Winner
        </Button>
      );
    }

    if (this.state.winnerDisplay) {
      winnerSelected = (
        <>
          <div
            className="animate__animated animate__bounceInDown animate__delay-1s"
            style={{
              textAlign: "center",
              marginTop: "3%",
              fontSize: "35px",
              fontFamily: "Staatliches, sans-serif",
            }}
          >
            Winner
          </div>
          <h3
            style={{ textAlign: "center" }}
            className="animate__animated animate__bounceInDown animate__delay-2s"
          >
            {winner}
          </h3>
        </>
      );
    }

    return (
      <>
        <Container>
          <Form.Group>
            <h2>Giveaway</h2>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Activate Giveaway"
              style={{ userSelect: "none" }}
            />
          </Form.Group>
          <Form.Group>
            <InfoIcon
              name={Features[2].name}
              description={Features[2].description}
              trigger={Features[2].trigger}
              gif={Features[2].gif}
            />
          </Form.Group>
          <Form.Group style={{ textAlign: "center" }}>
            <Form.Group>
              <Form.Label>
                {testing.length} <br /> Trovo Users Joined
              </Form.Label>
            </Form.Group>
            <Button onClick={this.handleShowModal} variant="outline-dark">
              View List
            </Button>{" "}
            {btnDisplayButton} <Button variant="outline-danger">Reset</Button>
            <ReactCanvasConfetti
              refConfetti={this.getInstance}
              style={canvasStyles}
            />
          </Form.Group>
          {winnerSelected}
          <ShowModal show={this.state.modal} onHide={this.handleHideModal} />
        </Container>
      </>
    );
  }
}
/*function App() {
  return (
    <Container>
      <Form.Group>
        <h2>Giveaway</h2>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate Giveaway"
          style={{ userSelect: "none" }}
        />
      </Form.Group>
      <Form.Group>
        <BiHelpCircle size={30} />
      </Form.Group>
      <Form.Group style={{ textAlign: "center" }}>
        <Button variant="outline-primary">Update Filp Coin Message</Button>{" "}
      </Form.Group>
    </Container>
  );
}*/

//export default App;
