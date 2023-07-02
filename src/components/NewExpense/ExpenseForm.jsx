import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("Test");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState();

  const updatetitle = (e) => {
    setTitle(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const data = {
      id: Math.random().toString(),
      item: title,
      price: amount,
      date: new Date(date),
    };

    // console.log(data);

    props.newData(data);

    setTitle("");
    setAmount(0);
    setDate("");


    props.setShowForm(false)
  };

  return (
    <form onSubmit={submitHandle}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" onChange={updatetitle} value={title} />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="button" onClick={() => props.setShowForm(false)}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
