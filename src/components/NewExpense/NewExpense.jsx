import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const newData = (data) => {
    // console.log(data)
    props.oldData(data);
  };

  const formHandle = () => {
    setShowForm(true);
  };

  return (
    <div className="new-expense">

      {!showForm && <button onClick={formHandle}>Add New Expense</button>}

      {showForm && <ExpenseForm newData={newData} setShowForm={setShowForm} />}
    </div>
  );
};

export default NewExpense;
