/* eslint-disable no-case-declarations */
import { useEffect, useReducer, useState } from "react";
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
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const addExpensOrIncome = (data) => {
    dispatch({ type: "ADD", payload: data });
  };
  const removeExpenseOrIncome = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  useEffect(() => {
    const expense = transactions.reduce((prevValue, transaction) => {
      if (
        (transaction.type === "Expense" && transaction.category === "Bills") ||
        transaction.category === "Travel" ||
        transaction.category === "Food" ||
        transaction.category === "Shopping" ||
        transaction.category === "Others"
      ) {
        return prevValue + transaction.amount;
      }
      return prevValue;
    }, 0);

    setTotalExpense(expense);

    const income = transactions.reduce((prevValue, transaction) => {
      if (
        (transaction.type === "Income" && transaction.category === "Salary") ||
        transaction.category === "House"
      ) {
        return prevValue + transaction.amount;
      }
      return prevValue;
    }, 0);

    setTotalIncome(income);
  }, [transactions]);

  const expenseInfo = {
    totalIncome,
    totalExpense,
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
