import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {

  let dataPoint = [
    { lable: "Jan", price: 0 },
    { lable: "Feb", price: 0 },
    { lable: "Mar", price: 0 },
    { lable: "Apr", price: 0 },
    { lable: "May", price: 0 },
    { lable: "Jun", price: 0 },
    { lable: "July", price: 0 },
    { lable: "Aug", price: 0 },
    { lable: "Sept", price: 0 },
    { lable: "Oct", price: 0 },
    { lable: "Nov", price: 0 },
    { lable: "Dec", price: 0 },
  ];

  for (let record of props.filterRecord) {
    // console.log(record.date.getMonth())
    let month = record.date.getMonth();
    dataPoint[month].price += record.price;
  }


  return (
    <div>
      <Chart dataPoint={dataPoint} />
    </div>
  );
};

export default ExpenseChart;
