/* eslint-disable no-unused-vars */
import React from "react";

const ExpenseContext = React.createContext({
  expense: [],
  addExpensOrIncome: (data) => {},
  removeExpenseOrIncome: (id) => {},
});

export default ExpenseContext;
