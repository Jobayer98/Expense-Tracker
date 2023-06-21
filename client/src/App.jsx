import Expense from "./components/Expense/Expense";
import Tracker from "./components/ExpenseTracker/Tracker";
import Income from "./components/Income/Income";

const App = () => {
  return (
    <div>
      <Income />
      <Tracker />
      <Expense />
    </div>
  );
};

export default App;
