/* eslint-disable no-unused-vars */
import React from "react";

const ExpenseContext = React.createContext({
  transactions: [],
  addExpensOrIncome: (data) => {},
  removeExpenseOrIncome: (id) => {},
});

export default ExpenseContext;
