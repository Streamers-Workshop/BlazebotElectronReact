import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import plugins from "./plugins.js";

function App() {
  return (
    <Container>
      <div className="row row-cols-1 row-cols-md-3">
        {plugins.map((value, index) => {
          return (
            <div key={index} className="col mb-4">
              <Card border="success" className="mb-3">
                <Card.Header
                  className="textOverflow"
                  style={{ textAlign: "center", fontSize: "16px" }}
                >
                  {value.name}
                </Card.Header>
                <Card.Body style={{ textAlign: "center" }}>
                  <div style={{ marginBottom: "10px" }}>
                    <Link to={value.path}>
                      <img src={value.image} alt={value.alt} />
                    </Link>
                  </div>
                  <Link to={value.path}>
                    <Button variant="success">View</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default App;
