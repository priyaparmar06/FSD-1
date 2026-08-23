import {
  useEffect,
  useState,
  useMemo,
  useCallback
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";

import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import About from "./pages/About";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("studentExpenses");

    if (savedExpenses) {
      return JSON.parse(savedExpenses);
    }

    return [
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
  });

  useEffect(() => {
    localStorage.setItem(
      "studentExpenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  const addExpense = useCallback((newExpense) => {
    setExpenses((currentExpenses) => [
      ...currentExpenses,
      newExpense
    ]);
  }, []);

  const deleteExpense = useCallback((id) => {
    setExpenses((currentExpenses) =>
      currentExpenses.filter(
        (expense) => expense.id !== id
      )
    );
  }, []);

  const total = useMemo(() => {
    let totalAmount = 0;

    expenses.forEach((expense) => {
      totalAmount = totalAmount + expense.amount;
    });

    return totalAmount;
  }, [expenses]);

  return (
    <BrowserRouter>
      <div>
        <Header />

        <nav>
          <Link to="/">Home</Link>{" | "}
          <Link to="/expenses">Expenses</Link>{" | "}
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/expenses"
            element={
              <div>
                <SummaryCard total={total} />

                <Expenses
                  expenses={expenses}
                  addExpense={addExpense}
                  deleteExpense={deleteExpense}
                />
              </div>
            }
          />

          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;