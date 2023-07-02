import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter_control">
        <label>Filter by Year</label>
        <select onChange={(e)=>props.updateYear(e.target.value)} value={props.filterYear}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
