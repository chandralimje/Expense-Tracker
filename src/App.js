import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyData = [
  {
    id: "exp1",
    date: new Date(2020, 7, 19),
    item: "New Desk (Wooden)",
    price: 475.45,
  },
  {
    id: "exp2",
    date: new Date(2020, 11, 22),
    item: "New Bike",
    price: 600.15,
  },
  {
    id: "exp3",
    date: new Date(2020, 11, 12),
    item: "New Shirt",
    price: 55.22,
  },
  {
    id: "exp4",
    date: new Date(2021, 3, 8),
    item: "New Mobile",
    price: 245.45,
  },
  {
    id: "exp5",
    date: new Date(2023, 11, 25),
    item: "New Laptop",
    price: 150.45,
  },
];

function App() {
  const [expenseData, setexpenseData] = useState(dummyData);

  const oldData = (data) => {
    // console.log(data);

    setexpenseData((prev) => [data, ...prev]);
  };

  return (
    <div>
      <NewExpense oldData={oldData} />
      <Expenses expenseData={expenseData} />
    </div>
  );
}

export default App;
