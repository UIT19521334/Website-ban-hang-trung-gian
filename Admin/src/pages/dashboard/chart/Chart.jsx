// Nhìn dòng này nó vô dụng đúng không nhưng éo nhá - không có nó thì trang chart méo hiện lên vầ t chả biết vì sao
import { Chart as ChartJS } from "chart.js/auto";

import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataLine: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Revenue",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [12, 5, 7, 16, 7, 4, 10],
        },
      ],
    },
  };

  render() {
    return (
      <div>
        <h3>Revenue charts</h3>
        <MDBContainer>
          <Line
            style={{ position: "relative" }}
            data={this.state.dataLine}
            options={{ responsive: true }}
          />
        </MDBContainer>
      </div>
    );
  }
}

export default ChartsPage;
