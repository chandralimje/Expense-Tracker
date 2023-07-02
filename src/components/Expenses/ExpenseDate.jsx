import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ expenseData }) => {
  // const months = month[expenseData.date.getMonth()];
  const months = expenseData.date.toLocaleString("en-us", { month: "long" });
  const year = expenseData.date.getFullYear();
  const date = expenseData.date.getDate();

  return (
    <div className="expense-date">
      <div className="expense-date_month">{months}</div>
      <div className="expense-date_year">{year}</div>
      <div className="expense-date_date">{date}</div>
    </div>
  );
};

export default ExpenseDate;
