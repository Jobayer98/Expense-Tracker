import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import FormData from "../FormData/FormData";

const Tracker = () => {
  return (
    <Card style={{ background: "#fff", height: "400px" }}>
      <CardHeader title="Expense Tracker" />
      <CardContent>
        <Typography variant="subtitle1" align="center">
          Total Balance $90
        </Typography>
        <Typography variant="subtitle2" align="center">
          Try saying: Add income for $100 in Category Salary for Monday
        </Typography>
        <Divider />
      </CardContent>
      <CardContent>
        <Typography> {/* speech conten */} </Typography>
        <FormData />
      </CardContent>
    </Card>
  );
};

export default Tracker;
