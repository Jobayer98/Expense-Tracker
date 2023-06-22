import {
  Autocomplete,
  Button,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";

const typeData = [{ title: "Income" }, { title: "Expense" }];

const category = [
  { title: "Bills" },
  { title: "Car" },
  { title: "Travel" },
  { title: "Food" },
  { title: "Shopping" },
  { title: "Salary" },
  { title: "House" },
  { title: "Others" },
];

const FormData = () => {
  const { addExpensOrIncome } = useContext(ExpenseContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const expenseData = {
      id: uuidv4(),
      type: data.type,
      category: data.category,
      amount: parseFloat(data.amount),
      date: data.date,
    };
    addExpensOrIncome(expenseData);
  };
  return (
    <FormControl fullWidth>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Autocomplete
              clearOnEscape
              options={typeData}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Type"
                  variant="standard"
                  {...register("type")}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              clearOnEscape
              options={category}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Category"
                  variant="standard"
                  {...register("category")}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Amount"
              variant="standard"
              {...register("amount")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
              label="Date"
              {...register("date")}
            />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: "16px" }} variant="outlined" fullWidth>
          Create
        </Button>
      </form>
    </FormControl>
  );
};

export default FormData;
