import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenseData }) => {

  // console.log(expenseData)
  return (
    <div className="expense-item">
      <ExpenseDate expenseData={expenseData} />

      <div className="expense-item_description">
        <h2>{expenseData.item}</h2>
      </div>

      <div className="expense-item_price">$ {expenseData.price}</div>
    </div>
  );
};

export default ExpenseItem;
