function ExpenseCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Category: {props.category}</p>
      <p>Amount: ₹{props.amount}</p>
    </div>
  );
}

export default ExpenseCard;