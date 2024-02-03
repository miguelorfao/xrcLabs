import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChartGraph() {
  return (
    <div>
      {" "}
      <canvas id="myChart"></canvas>
    </div>
  );
}

export default LineChartGraph;
