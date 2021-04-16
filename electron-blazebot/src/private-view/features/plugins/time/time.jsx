import "bootstrap/dist/css/bootstrap.min.css";
import "./time.css";
import React from "react";
import { Container, Form } from "react-bootstrap";
import { Features } from "../../../../components/helpIcon/helpinfo";
import InfoIcon from "../../../../components/helpIcon/help";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
    });
  }

  render() {
    return (
      <Container>
        <Form.Group>
          <h2>Time</h2>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Activate Time"
            style={{ userSelect: "none" }}
          />
        </Form.Group>
        <Form.Group>
          <InfoIcon
            name={Features[8].name}
            description={Features[8].description}
            trigger={Features[8].trigger}
            gif={Features[8].gif}
          />
        </Form.Group>
        <Form.Group style={{ marginTop: "30px" }}>
          <Form.Label>Your Currenct Local Time</Form.Label>
          <div className="clock">{this.state.currentTime}</div>
        </Form.Group>
      </Container>
    );
  }
}

export default App;
