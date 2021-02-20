import logo from "./trovologo.png";
import maskLogo from "./mask.png";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bs from "react-bootstrap";

function About() {
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
            <bs.Nav.Link path="">Home</bs.Nav.Link>
            <bs.Nav.Link path="">About</bs.Nav.Link>
            <bs.Nav.Link path="">Commands</bs.Nav.Link>
          </bs.Nav>
        </bs.Navbar.Collapse>
      </bs.Navbar>
      <div
        style={{
          paddingTop: "30px",
          paddingBottom: "30px",
          textAlign: "center",
        }}
      >
        <bs.Image src={maskLogo} width="350" height="350" roundedCircle />
      </div>
      <div style={{ paddingBottom: "40px" }}>
        <bs.Container>
          <bs.Accordion defaultActiveKey="0">
            <bs.Card>
              <bs.Accordion.Toggle as={bs.Card.Header} eventKey="0">
                <b>Who is the Creator of Blazebot?</b>
              </bs.Accordion.Toggle>
              <bs.Accordion.Collapse eventKey="0">
                <bs.Card.Body>
                  Aenean vulputate pharetra quam, vitae dictum orci sodales at.
                  Aliquam egestas, purus quis faucibus consectetur, odio dui
                  imperdiet orci, non fringilla orci ex at quam. Etiam in
                  suscipit ante. Phasellus id odio sodales, sodales arcu eget,
                  elementum leo. Nam a tincidunt ipsum. Sed scelerisque felis id
                  magna malesuada molestie. Quisque sagittis vulputate lacus non
                  ultricies. Fusce maximus mauris mauris, eget pharetra risus
                  tristique quis. Nulla vehicula ullamcorper massa, vel
                  malesuada libero scelerisque quis. Sed egestas, ex sodales
                  dapibus feugiat, est felis rutrum augue, ac molestie leo ex eu
                  libero. Integer lacinia tristique ante, id gravida nibh
                  vehicula in. Donec est arcu, ultricies sed accumsan in,
                  imperdiet a purus. Phasellus eu rutrum elit. Nam congue in
                  ante eu semper.
                </bs.Card.Body>
              </bs.Accordion.Collapse>
            </bs.Card>
            <bs.Card>
              <bs.Accordion.Toggle as={bs.Card.Header} eventKey="1">
                <b>Plugins and Trovo.js Contributers</b>
              </bs.Accordion.Toggle>
              <bs.Accordion.Collapse eventKey="1">
                <bs.Card.Body>
                  Aenean vulputate pharetra quam, vitae dictum orci sodales at.
                  Aliquam egestas, purus quis faucibus consectetur, odio dui
                  imperdiet orci, non fringilla orci ex at quam. Etiam in
                  suscipit ante. Phasellus id odio sodales, sodales arcu eget,
                  elementum leo. Nam a tincidunt ipsum. Sed scelerisque felis id
                  magna malesuada molestie. Quisque sagittis vulputate lacus non
                  ultricies. Fusce maximus mauris mauris, eget pharetra risus
                  tristique quis. Nulla vehicula ullamcorper massa, vel
                  malesuada libero scelerisque quis. Sed egestas, ex sodales
                  dapibus feugiat, est felis rutrum augue, ac molestie leo ex eu
                  libero. Integer lacinia tristique ante, id gravida nibh
                  vehicula in. Donec est arcu, ultricies sed accumsan in,
                  imperdiet a purus. Phasellus eu rutrum elit. Nam congue in
                  ante eu semper.
                </bs.Card.Body>
              </bs.Accordion.Collapse>
            </bs.Card>
          </bs.Accordion>
        </bs.Container>
      </div>
    </>
  );
}

export default About;
