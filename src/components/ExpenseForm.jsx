import { useState } from "react";

function ExpenseForm(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name === "" || category === "" || amount === "") {
      return;
    }

    const newExpense = {
      id: Date.now(),
      name: name,
      category: category,
      amount: Number(amount)
    };

    props.addExpense(newExpense);

    setName("");
    setCategory("");
    setAmount("");
  }

  return (
    <div>
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;