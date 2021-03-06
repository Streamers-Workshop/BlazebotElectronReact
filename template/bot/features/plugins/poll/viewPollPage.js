const $ = require("jquery");
const fs = require("fs");
const path = require("path");
const Chart = require("chart.js");
const settings = require("./poll.json");

$(document).ready(() => {
  var ctx = document.getElementById("myChart");

  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: settings.namesOfPolls,
      datasets: [
        {
          label: "#Poll of Votes",
          data: settings.dataValue,
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
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  function reloadData() {
    $.ajax({
      url: "./poll.json",
      dataType: "json",
      success: function (result) {
        myChart.data.labels = result.namesOfPolls;
        myChart.data.datasets[0].data = result.dataValue;
        myChart.update();
        setTimeout(reloadData, 2000);
      },
    });
  }

  reloadData();
});
