import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Container, InputGroup, FormControl } from "react-bootstrap";
import "../bar.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Mana",
      background: "#3CD4C5",
      borderColor: "#FFFFFF",
      colorFont: "#FFFFFF",
    };
  }

  changeMessage = (e) => {
    this.setState({ value: e.target.value });
  };

  changeBackground = (color) => {
    this.setState({ background: color.target.value });
  };

  changeBorderColor = (color) => {
    this.setState({ borderColor: color.target.value });
  };

  changeFontColor = (color) => {
    this.setState({ colorFont: color.target.value });
  };

  render() {
    return (
      <Container>
        <Form.Group style={{ marginBottom: "25px" }}>
          <label>Preview</label>
          <div className="borderPreview">
            <div className="goal-cont" style={{ color: this.state.colorFont }}>
              <div style={{ position: "relative" }}>
                <div
                  id="goal-bar"
                  style={{ borderColor: this.state.borderColor }}
                >
                  <p id="goal-current">0</p>
                  <p id="title" className="textOverflow">
                    {this.state.value}
                  </p>
                  <p id="goal-total">100</p>
                  <div
                    id="total-bar-sub"
                    style={{
                      background: this.state.background,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </Form.Group>
        <Form.Group>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="URL"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            value={this.state.value}
            onChange={this.changeMessage}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Background</Form.Label>
          <Form.Control
            type="color"
            value={this.state.background}
            onChange={this.changeBackground}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Border Color</Form.Label>
          <Form.Control
            type="color"
            value={this.state.borderColor}
            onChange={this.changeBorderColor}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Font Color</Form.Label>
          <Form.Control
            type="color"
            value={this.state.colorFont}
            onChange={this.changeFontColor}
          />
        </Form.Group>
      </Container>
    );
  }
}

export default App;
