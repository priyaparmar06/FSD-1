import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <div>
      <Header />

      <SummaryCard total="300" />

      <ExpenseList />
    </div>
  );
}

export default App;