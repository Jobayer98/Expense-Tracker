import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import FormData from "../FormData/FormData";
import AllTransaction from "../List/List";
import { useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";

const Tracker = () => {
  const { totalIncome, totalExpense } = useContext(ExpenseContext);
  return (
    <>
      <Card style={{ background: "#fff", height: "500px" }}>
        <CardHeader title="Expense Tracker" />
        <CardContent>
          <Typography variant="h6" align="center">
            Total Balance: ${totalIncome - totalExpense}
          </Typography>
          <Divider />
        </CardContent>
        <CardContent>
          <Typography> {/* speech conten */} </Typography>
          <FormData />
        </CardContent>
        <AllTransaction />
      </Card>
    </>
  );
};

export default Tracker;
