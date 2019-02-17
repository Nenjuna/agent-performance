export const planetChartData = {
  type: "line",
  data: {
    labels: [
      "Mercury",
      "Venus",
      "Earth",
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune"
    ],
    datasets: [
      {
        // one line graph
        label: "Number of Moons",
        data: [0, 0, 1, 2, 6, 10, 15, 14],
        backgroundColor: [
          "rgb(252, 74, 115, .9)" // Blue
        ],
        borderColor: [
          "#2556F8",
          "#2556F8",
          "#2556F8",
          "#2556F8",
          "#2556F8",
          "#2556F8",
          "#2556F8",
          "#2556F8"
        ],
        borderWidth: 3
      },
      {
        // another line graph
        label: "Planet Mass (x1,000 km)",
        data: [4.8, 12.1, 12.7, 6.7, 13, 15, 20, 21],
        backgroundColor: [
          "rgb(37, 86, 248, 0.9)" // Green
        ],
        borderColor: ["#47b784"],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 5
          }
        }
      ]
    }
  }
};

export default planetChartData;
