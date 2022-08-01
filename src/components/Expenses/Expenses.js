import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import("./Expenses.css");

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const savedYearSelectionData = (userSelectedYear) => {
    setFilteredYear(userSelectedYear);
  };

  let filteredExpenseArray = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  /* Creation of Expenses Content  */

  return (
    <Card className="expenses">
      <ExpensesFilter
        year={filteredYear}
        onSelectionChange={savedYearSelectionData}
      />

      <ExpensesChart expenses={filteredExpenseArray} />

      <ExpensesList items={filteredExpenseArray} />
    </Card>
  );
};

export default Expenses;
