import React from "react";
import Plot from "react-plotly.js";

const Graph = props => (
  <div id="graph-container">
    {}
    <Plot
      data={[
        {
          x: props.xData,
          y: props.yData,
          type: "scatter",
          mode: "lines+points",
          marker: { color: "red" }
        }
      ]}
      layout={{
        width: 320,
        height: 240,
        title: "Tweet Volume in Past 24 Hours",
        xaxis: { title: "Time" },
        yaxis: { title: "Tweets per hour" }
      }}
    />
  </div>
);

export default Graph;
