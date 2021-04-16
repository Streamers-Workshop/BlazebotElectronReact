import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import BronzeMedal from "./medal/bronze.png";
import SliverMedal from "./medal/silver.png";
import GoldMedal from "./medal/gold.png";
import { Features } from "../../../../components/helpIcon/helpinfo";
import InfoIcon from "../../../../components/helpIcon/help";

function App() {
  return (
    <Container>
      <Form.Group>
        <h2>Leaderboard</h2>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Activate Leaderboard"
          style={{ userSelect: "none" }}
        />
      </Form.Group>
      <Form.Group>
        <InfoIcon
          name={Features[5].name}
          description={Features[5].description}
          trigger={Features[5].trigger}
          gif={Features[5].gif}
        />
      </Form.Group>
      <Form.Group>
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-4">
            <Card border="secondary" className="mb-3">
              <Card.Header style={{ textAlign: "center" }}>Name</Card.Header>
              <Card.Body style={{ textAlign: "center" }}>
                <img alt="sliver" src={SliverMedal} width="60" />
                <Card.Title>Level</Card.Title>
                <Card.Text>324234234</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col mb-4">
            <Card border="secondary" className="mb-3">
              <Card.Header style={{ textAlign: "center" }}>Name</Card.Header>
              <Card.Body style={{ textAlign: "center" }}>
                <img alt="gold" src={GoldMedal} width="60" />
                <Card.Title>Level</Card.Title>
                <Card.Text>324234234</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col mb-4">
            <Card border="secondary" className="mb-3">
              <Card.Header style={{ textAlign: "center" }}>Name</Card.Header>
              <Card.Body style={{ textAlign: "center" }}>
                <img alt="bronze" src={BronzeMedal} width="60" />
                <Card.Title>Level</Card.Title>
                <Card.Text>324234234</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Form.Group>
      <Form.Group style={{ textAlign: "center" }}>
        <Button variant="outline-primary">Points / Level</Button>{" "}
      </Form.Group>
    </Container>
  );
}

export default App;
