import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function Expenses(props) {
  return (
    <div>
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