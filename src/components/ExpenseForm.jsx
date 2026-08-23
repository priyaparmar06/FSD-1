import { useState, useRef } from "react";

function ExpenseForm(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState("");

  const nameInputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (name !== "" && amount !== "") {
      const newExpense = {
        id: Date.now(),
        name: name,
        category: category,
        amount: Number(amount)
      };

      props.addExpense(newExpense);

      setName("");
      setCategory("Food");
      setAmount("");

      nameInputRef.current.focus();
    }
  }

  function focusNameInput() {
    nameInputRef.current.focus();
  }

  return (
    <div>
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <input
          ref={nameInputRef}
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Education">Education</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />

        <button type="submit">
          Add Expense
        </button>
      </form>

      <button onClick={focusNameInput}>
        Focus Expense Name
      </button>
    </div>
  );
}

export default ExpenseForm;