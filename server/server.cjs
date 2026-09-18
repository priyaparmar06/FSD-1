const express = require("express");
const connectDB = require("./db.cjs");
const Expense = require("./Expense.cjs");

const app = express();

const PORT = 5000;

app.use(express.json());

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "http://localhost:5173"
  );

  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

connectDB();

app.get("/", (req, res) => {
  res.send("Student Expense Tracker REST API is running");
});


// GET - Get all expenses
app.get("/api/expenses", async (req, res) => {
  const expenses = await Expense.find();

  res.json(expenses);
});


// GET - Get one expense
app.get("/api/expenses/:id", async (req, res) => {
  const expense = await Expense.findById(req.params.id);

  res.json(expense);
});


// POST - Add new expense
app.post("/api/expenses", async (req, res) => {
  const expense = new Expense({
    name: req.body.name,
    category: req.body.category,
    amount: req.body.amount
  });

  const savedExpense = await expense.save();

  res.json(savedExpense);
});


// PUT - Update expense
app.put("/api/expenses/:id", async (req, res) => {
  const updatedExpense = await Expense.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      category: req.body.category,
      amount: req.body.amount
    },
    { new: true }
  );

  res.json(updatedExpense);
});


// DELETE - Delete expense
app.delete("/api/expenses/:id", async (req, res) => {
  const deletedExpense = await Expense.findByIdAndDelete(
    req.params.id
  );

  res.json(deletedExpense);
});


app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );
});