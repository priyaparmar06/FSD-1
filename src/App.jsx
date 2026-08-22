import { useState } from "react";

import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Pizza",
      category: "Food",
      amount: 250
    },
    {
      id: 2,
      name: "Bus Ticket",
      category: "Travel",
      amount: 50
    }
  ]);

  function addExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  function deleteExpense(id) {
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== id
    );

    setExpenses(updatedExpenses);
  }

  let total = 0;

  expenses.forEach((expense) => {
    total = total + expense.amount;
  });

  return (
    <div>
      <Header />

      <SummaryCard total={total} />

      <ExpenseForm addExpense={addExpense} />

      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;