import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formCondition, setFormCondition] = useState("0");

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString().substr(2, 9),
    };

    console.log(expenseData);
    //Communicating with Parent Component (App.js)
    props.onAddExpense(expenseData);

    setFormCondition("0");
  };

  const newFormOpenHandler = () => {
    setFormCondition("1");
  };

  const formCancelHandler = () => {
    setFormCondition("0");
  };

  return (
    <div className="new-expense">
      {formCondition === "0" ? (
        <button onClick={newFormOpenHandler}>Add New Expenses</button>
      ) : (
        <ExpenseForm
          onCancelForm={formCancelHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
