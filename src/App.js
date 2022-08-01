import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 294.33,
    date: new Date(2021, 2, 28),
  },
  { id: "e2", title: "Maintain", amount: 200, date: new Date(2021, 4, 8) },
  { id: "e3", title: "Car 2", amount: 225, date: new Date(2020, 5, 2) },
  { id: "e4", title: "Car 3", amount: 300, date: new Date(2019, 6, 12) }
];

const App = () => {

  const [expenses, setExpenses] =useState(initialExpenses)

  /* The function for the Adding Expense Form */
  const addExpenseHandler = expense => {
    // setExpenses automatically takes input as the previous version of the variable next to (expenses)
    setExpenses((prevExpenses) => {
      return [expense , ...prevExpenses ] ;      
    });
  };


  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      {/* Custom Elements */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
