/* eslint-disable no-case-declarations */
import { useReducer } from "react";
import ExpenseContext from "./ExpenseContext";

const initialTransaction = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const transactions = [action.payload, ...state];
      return transactions;
    case "REMOVE":
      const remainingTransactions = state.filter(
        (item) => item.id !== action.payload
      );
      return remainingTransactions;
    default:
      return state;
  }
};

const ExpenseProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(reducer, initialTransaction);

  const addExpensOrIncome = (data) => {
    dispatch({ type: "ADD", payload: data });
  };
  const removeExpenseOrIncome = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const expenseInfo = {
    transactions,
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
