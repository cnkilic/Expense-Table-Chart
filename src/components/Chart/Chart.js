import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  
  let sumValue = 0;
  dataPointValues.forEach((dataPointValue) => {
    sumValue = dataPointValue + sumValue;
  });
  

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          sumValue={sumValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
