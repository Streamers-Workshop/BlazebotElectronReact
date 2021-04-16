import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Form } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Features } from "../../../../components/helpIcon/helpinfo";
import InfoIcon from "../../../../components/helpIcon/help";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.state = {
      chartData: {
        labels: [
          "test1",
          "test2",
          "test3",
          "test4",
          "test5",
          "test6",
          "test7",
          "test8",
          "test9",
          "test10",
        ],
        datasets: [
          {
            label: "#Poll of Votes",
            data: [2, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 1, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 102, 255, 0.2)",
              "rgba(192, 204, 192, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 153, 255, 1)",
              "rgba(192, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    };
  }

  render() {
    return (
      <Container>
        <Form.Group>
          <h2>Poll System</h2>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Activate Poll System"
            style={{ userSelect: "none" }}
          />
        </Form.Group>
        <Form.Group>
          <InfoIcon
            name={Features[6].name}
            description={Features[6].description}
            trigger={Features[6].trigger}
            gif={Features[6].gif}
          />
        </Form.Group>
        <Form.Group>
          <Bar
            ref={this.chartReference}
            data={this.state.chartData}
            height={125}
          />{" "}
        </Form.Group>
        <hr />
      </Container>
    );
  }
}

export default App;
