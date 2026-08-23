import {
  useEffect,
  useState,
  useCallback
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import About from "./pages/About";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/expenses")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Data:", data);
        setExpenses(data);
      })
      .catch((error) => {
        console.log("API Error:", error);
      });
  }, []);

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
              <Expenses
                expenses={expenses}
                addExpense={addExpense}
                deleteExpense={deleteExpense}
              />
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