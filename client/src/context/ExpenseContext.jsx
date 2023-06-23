/* eslint-disable no-unused-vars */
import React from "react";

const ExpenseContext = React.createContext({
  totalIncome: 0,
  totalExpense: 0,
  transactions: [],
  addExpensOrIncome: (data) => {},
  removeExpenseOrIncome: (id) => {},
});

export default ExpenseContext;
