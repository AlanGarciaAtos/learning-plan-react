import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      <ExpensesList items={filteredExpenses} />
      {/* Another way to make consitional content*/}
      {/*{filteredExpenses.length === 0*/}
      {/*  ? expensesContent*/}
      {/*  : props.items.map((expense) => (*/}
      {/*      <ExpenseItem*/}
      {/*        key={expense.id}*/}
      {/*        title={expense.title}*/}
      {/*        amount={expense.amount}*/}
      {/*        date={expense.date}*/}
      {/*      />*/}
      {/*    ))}*/}
    </Card>
  );
};

export default Expenses;
