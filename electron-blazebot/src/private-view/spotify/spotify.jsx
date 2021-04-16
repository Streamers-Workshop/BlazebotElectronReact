import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Form,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";
//ListGroup,
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
//import { SiSpotify } from "react-icons/si";
import "./spotify.css";

function App() {
  return (
    <Container>
      {/*
      <p>
        Use BlazeBot to show an overlay of the current song that is playing on
        your stream, including functionalities for the (Creator/Moderator) to
        add, skip and show current song
      </p>

      <ListGroup>
        <ListGroup.Item>
          !addsong (url/name of song) - add song to playlist
        </ListGroup.Item>
        <ListGroup.Item>
          !skipsong - skip the current song to the next song
        </ListGroup.Item>
        <ListGroup.Item>
          !song - display the current song that is playing on Trovo Chat
        </ListGroup.Item>
      </ListGroup>

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button className="btn btn-spotify" onClick={() => spotify()}>
          Spotify <SiSpotify size={24} />{" "}
        </button>
      </div>*/}
      <Form.Group>
        <img
          className="album"
          alt="preview"
          src="https://i.scdn.co/image/ab67616d0000b2739b2fd3a5d29c28e87a25553a"
        />
        <div className="spotify-view">
          <div className="textOverflow">
            <span className="artistsong">Artist: </span> BURNOUT
          </div>
          <div className="textOverflow">
            <span className="artistsong">Song: </span>FLY HIGH
          </div>
        </div>
        this is just an preview example
      </Form.Group>
      <hr />
      <Form.Group style={{ marginTop: "25px" }}>
        <Form.Label>Spotify Overlays</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="URL"
            aria-label="URL"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form.Group>

      <div style={{ textAlign: "center" }}>
        <Form.Group>
          <Button variant="outline-dark" style={{ marginRight: "4px" }}>
            <FaArrowAltCircleLeft />{" "}
          </Button>{" "}
          <Button variant="outline-dark" style={{ marginLeft: "4px" }}>
            <FaArrowAltCircleRight />{" "}
          </Button>
        </Form.Group>
      </div>
    </Container>
  );
}

export default App;
