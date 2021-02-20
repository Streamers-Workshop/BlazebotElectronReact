import logo from "./trovologo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bs from "react-bootstrap";

function Home() {
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
    </>
  );
}

export default Home;
