import { Grid, Paper, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import ExpenseContext from "../../context/ExpenseContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const Expense = () => {
  const { transactions } = useContext(ExpenseContext);

  const totalExpense = transactions.reduce((prevValue, transaction) => {
    if (transaction.type === "Expense") {
      return prevValue + transaction.amount;
    }
    return prevValue;
  }, 0);

  const bills = transactions.reduce((prevBills, item) => {
    if (item.category === "Bills") {
      return prevBills + item.amount;
    }
    return prevBills;
  }, 0);
  const travel = transactions.reduce((prevTravel, item) => {
    if (item.category === "Travel") {
      return prevTravel + item.amount;
    }
    return prevTravel;
  }, 0);
  const food = transactions.reduce((prevFood, item) => {
    if (item.category === "Food") {
      return prevFood + item.amount;
    }
    return prevFood;
  }, 0);
  const shopping = transactions.reduce((prevShopping, item) => {
    if (item.category === "Shopping") {
      return prevShopping + item.amount;
    }
    return prevShopping;
  }, 0);
  const others = transactions.reduce((prevOthers, item) => {
    if (item.category === "Others") {
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
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
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
