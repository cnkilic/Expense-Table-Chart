import React from "react";
import ExpenseItem from "./ExpenseItem";
import("./ExpensesList.css");

const ExpensesList = (props) => {
  
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2> ;
  }
  return (
      <ul className="expenses-list">
        {props.items.map((item) => (
        <ExpenseItem
            // Each of the followings are Attiribute we can reach these attiributes in Component's function by using props as  input of the function and props contains all the attiributes that is send
            key={item.id} //item mapping yapıyosan her zaman key-id ekle unique element oluşturmak için
            title={item.title}
            amount={item.amount}
            date={item.date}
        />
        ))}
      </ul>
  );
};

export default ExpensesList;
