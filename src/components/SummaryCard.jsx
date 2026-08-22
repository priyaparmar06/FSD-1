function SummaryCard(props) {
  return (
    <div>
      <h2>Total Expenses</h2>
      <h3>₹{props.total}</h3>
    </div>
  );
}

export default SummaryCard;