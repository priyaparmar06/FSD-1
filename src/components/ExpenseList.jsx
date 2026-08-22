import ExpenseCard from "./ExpenseCard";

function ExpenseList(props) {
  return (
    <div>
      <h2>Recent Expenses</h2>

      {props.expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          id={expense.id}
          name={expense.name}
          category={expense.category}
          amount={expense.amount}
          deleteExpense={props.deleteExpense}
        />
      ))}
    </div>
  );
}

export default ExpenseList;