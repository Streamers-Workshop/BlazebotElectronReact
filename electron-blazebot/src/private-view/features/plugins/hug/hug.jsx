import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Form } from "react-bootstrap";
import { Features } from "../../../../components/helpIcon/helpinfo";
import InfoIcon from "../../../../components/helpIcon/help";
import HuggingGif from "./pagehug.gif";

function App() {
  return (
    <Container>
      <Form.Group>
        <h2>Hug</h2>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate Hug"
          style={{ userSelect: "none" }}
        />
      </Form.Group>
      <Form.Group>
        <InfoIcon
          name={Features[3].name}
          description={Features[3].description}
          trigger={Features[3].trigger}
          gif={Features[3].gif}
        />
      </Form.Group>
      <div style={{ textAlign: "center" }}>
        <Form.Group>
          <img alt="hugging" src={HuggingGif} width="300" />
        </Form.Group>
      </div>
    </Container>
  );
}

export default App;
