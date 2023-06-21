import { useReducer } from "react";
import ExpenseContext from "./ExpenseContext";

const initialTransaction = [];

const reducer = (state, action) => {
  if (action.type === "ADD") {
    const transactions = [...state, action.payload];
    console.log(transactions);
    return transactions;
  }
};

const ExpenseProvider = ({ children }) => {
  const [transaction, dispatch] = useReducer(reducer, initialTransaction);

  const addExpensOrIncome = (data) => {
    dispatch({ type: "ADD", payload: data });
  };
  const removeExpenseOrIncome = () => {};

  const expenseInfo = {
    transaction,
    addExpensOrIncome,
    removeExpenseOrIncome,
  };
  return (
    <ExpenseContext.Provider value={expenseInfo}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
