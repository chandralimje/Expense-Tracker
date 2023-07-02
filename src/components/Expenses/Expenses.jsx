import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.jsx";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = ({ expenseData }) => {
  const [filterYear, setFilterYear] = useState("2020");

  const updateYear = (year) => {
    // console.log(year);
    setFilterYear(year);
  };

  let filterRecord = expenseData.filter((exp) => {
    return exp.date.getFullYear().toString() === filterYear.toString();
  });

  return (
    <div className="expenses">

      <ExpenseFilter updateYear={updateYear} filterYear={filterYear} />

      <ExpenseChart filterRecord={filterRecord} />
      
      {filterRecord.length > 0 ? (
        filterRecord.map((value, index) => {
          return <ExpenseItem expenseData={value} key={index} />;
        })
      ) : (
        <h2 style={{ color: "white", textAlign: "center" }}>No Data Found</h2>
      )}
    </div>
  );
};

export default Expenses;
