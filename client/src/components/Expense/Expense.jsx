/* eslint-disable no-const-assign */
import { Grid, Paper, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import ExpenseContext from "../../context/ExpenseContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const Expense = () => {
  const { transactions, totalExpense } = useContext(ExpenseContext);

  const bills = transactions.reduce((prevBills, item) => {
    if (item.type === "Expense" && item.category === "Bills") {
      return prevBills + item.amount;
    }
    return prevBills;
  }, 0);
  const travel = transactions.reduce((prevTravel, item) => {
    if (item.type === "Expense" && item.category === "Travel") {
      return prevTravel + item.amount;
    }
    return prevTravel;
  }, 0);
  const food = transactions.reduce((prevFood, item) => {
    if (item.type === "Expense" && item.category === "Food") {
      return prevFood + item.amount;
    }
    return prevFood;
  }, 0);
  const shopping = transactions.reduce((prevShopping, item) => {
    if (item.type === "Expense" && item.category === "Shopping") {
      return prevShopping + item.amount;
    }
    return prevShopping;
  }, 0);

  const others = transactions.reduce((prevOthers, item) => {
    if (item.type === "Expense" && item.category === "Others") {
      return prevOthers + item.amount;
    }
    return prevOthers;
  }, 0);

  const data = {
    labels: ["Bills", "Travel", "Food", "Shopping", "Others"],
    datasets: [
      {
        data: [bills, travel, food, shopping, others],
        backgroundColor: [
          "#ff8787",
          "#c92a2a",
          "#e64980",
          "#a61e4d",
          "#e64980",
        ],
      },
    ],
  };

  return (
    <Paper
      elevation={2}
      style={{ background: "#fff", height: "350px", paddingTop: "12px" }}
    >
      <Typography variant="subtitle1" sx={{ mx: "16px" }}>
        Total Expense: ${totalExpense}
      </Typography>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item>
          <Doughnut data={data} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Expense;
