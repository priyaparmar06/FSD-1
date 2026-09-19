import { useEffect, useState } from "react";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const getExpenses = () => {
    fetch("http://localhost:5000/api/expenses")
      .then((response) => response.json())
      .then((data) => {
        setExpenses(data);
      });
  };

  useEffect(() => {
    getExpenses();
  }, []);

  const addExpense = () => {
    fetch("http://localhost:5000/api/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        category: category,
        amount: Number(amount)
      })
    })
      .then((response) => response.json())
      .then(() => {
        console.log("Expense added:", data);

        setName("");
        setCategory("");
        setAmount("");
        getExpenses();
      });
  };

  const deleteExpense = (id) => {
    fetch(`http://localhost:5000/api/expenses/${id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then(() => {
        getExpenses();
      });
  };

  return (
    <div>
      <h1>Student Expenses</h1>

      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Education">Education</option>
        <option value="Shopping">Shopping</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <h2>Expense List</h2>

      {expenses.map((expense) => (
        <div key={expense._id}>
          <p>
            {expense.name} - {expense.category} - ₹{expense.amount}
          </p>

          <button onClick={() => deleteExpense(expense._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Expenses;