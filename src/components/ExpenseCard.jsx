function ExpenseCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>

      <p>Category: {props.category}</p>

      <p>Amount: ₹{props.amount}</p>

      <button onClick={() => props.deleteExpense(props.id)}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseCard;