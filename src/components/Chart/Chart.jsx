import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  
  console.log(props.dataPoint);

  let priceArray = props.dataPoint.map(row => row.price);


  let maxPrice = Math.max(...priceArray)
  console.log(maxPrice)

  return (
    <div className="chart">
      {props.dataPoint.map((record) => {
        return (
          <ChartBar lable={record.lable} value={record.price} maxValue={maxPrice} />
        );
      })}
    </div>
  );
};

export default Chart;
