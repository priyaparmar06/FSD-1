const express = require("express");

const app = express();

const expenses = [
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
];

app.get("/", (req, res) => {
  res.send("Student Expense Tracker API is running");
});

app.get("/api/expenses", (req, res) => {
  res.json(expenses);
});

app.listen(5000, () => {
  console.log("Express server running at http://localhost:5000");
});