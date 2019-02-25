Chart.defaults.global.legend.display = false;



export const planetChartData = {
  type: "line",
  data: {
    labels: [
      "M",
      "T",
      "W",
      "T",
      "F",
      "S",
      "S"
    ],
    datasets: [
      {
        // one line graph
        label: "Number of Contacts resolved",
        data: [10, 12, 9, 15, 16, 10, 13],
        backgroundColor: [
          "rgb(102, 204, 255, .9)" // Blue
        ],

        borderWidth: 3,
        showLine: true
      }]
  },
  options: {
    responsive: true,
    lineTension: 0.5,
    layout: {
      padding: {
        left: -10,
        right: 0,
        top: 0,
        bottom: -10
      }
    },
    elements: {
      point: {
        radius: 0.1
      }
    },


    showLines: false,
    scales: {
      display: false,
      xAxes: [{
        ticks: {
          display: false,
          padding: 0

        },
        gridLines: {
          display: false
        }
      }],
      yAxes: [
        {
          offset: false,
          ticks: {
            display: false,

            beginAtZero: true,
            padding: 0
          },
          gridLines: {
            display: false
          }
        }
      ]
    }
  }
};

export default planetChartData;
