import { useMemo } from "react";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SummaryCard from "../components/SummaryCard";

function Expenses(props) {
  const total = useMemo(() => {
    let totalAmount = 0;

    props.expenses.forEach((expense) => {
      totalAmount = totalAmount + expense.amount;
    });

    return totalAmount;
  }, [props.expenses]);

  return (
    <div>
      <SummaryCard total={total} />

      <h1>My Expenses</h1>

      <ExpenseForm addExpense={props.addExpense} />

      <ExpenseList
        expenses={props.expenses}
        deleteExpense={props.deleteExpense}
      />
    </div>
  );
}

export default Expenses;