//External module
import Grid from "@mui/material/Grid";
// Internal module
import Expense from "./components/Expense/Expense";
import Tracker from "./components/ExpenseTracker/Tracker";
import Income from "./components/Income/Income";

const App = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={4}>
        <Income />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Tracker />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Expense />
      </Grid>
    </Grid>
  );
};

export default App;
