import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barheight = "0%";

  if (props.maxValue > 0) {
    barheight = Math.round((props.value / props.maxValue) * 100);
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div className="chart-bar_fill" style={{ height: barheight }}></div>
      </div>
      <div className="chart-bar_lable">{props.lable}</div>
    </div>
  );
};

export default ChartBar;
