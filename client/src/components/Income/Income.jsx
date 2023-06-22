import { Grid, Paper, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import ExpenseContext from "../../context/ExpenseContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const Income = () => {
  const { transactions } = useContext(ExpenseContext);

  const totalIncome = transactions.reduce((prevValue, transaction) => {
    if (
      transaction.type === "Income" &&
      transaction.category === "Salary" &&
      transaction.category === "House"
    ) {
      return prevValue + transaction.amount;
    }
    return prevValue;
  }, 0);

  const salary = transactions.reduce((preValue, item) => {
    if (item.type === "Income" && item.category === "Salary") {
      return preValue + item.amount;
    }
    return preValue;
  }, 0);

  const house = transactions.reduce((preValue, item) => {
    if (item.type === "Income" && item.category === "House") {
      return preValue + item.amount;
    }
    return preValue;
  }, 0);

  const data = {
    labels: ["Salary", "House"],
    datasets: [
      {
        data: [salary, house],
        backgroundColor: [
          "rgba(255, 10, 10, 0.3)",
          "rgba(0, 250, 0, 0.2)",
          "rgba(20, 10, 255, 0.3)",
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
        Total Income: ${totalIncome}
      </Typography>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item>
          <Doughnut data={data} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Income;
