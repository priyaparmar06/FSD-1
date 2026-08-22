import ExpenseCard from "./ExpenseCard";

function ExpenseList() {
  return (
    <div>
      <h2>Recent Expenses</h2>

      <ExpenseCard
        name="Pizza"
        category="Food"
        amount="250"
      />

      <ExpenseCard
        name="Bus Ticket"
        category="Travel"
        amount="50"
      />
    </div>
  );
}

export default ExpenseList;