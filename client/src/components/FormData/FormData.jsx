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
  { title: "Travel" },
  { title: "Food" },
  { title: "Shopping" },
  { title: "Salary" },
  { title: "House" },
  { title: "Others" },
];

const FormData = () => {
  const { addExpensOrIncome } = useContext(ExpenseContext);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const expenseData = {
      id: uuidv4(),
      type: data.type,
      category: data.category,
      amount: parseFloat(data.amount),
      date: data.date,
    };
    addExpensOrIncome(expenseData);
    reset();
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
                  error={errors.type ? true : false}
                  helperText={errors.type && "Type required"}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Type"
                  variant="standard"
                  {...register("type", { required: true })}
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
                  error={errors.category ? true : false}
                  helperText={errors.category && "Category required"}
                  label="Category"
                  variant="standard"
                  {...register("category", { required: true })}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={errors.amount ? true : false}
              helperText={errors.amount && "Amount required"}
              label="Amount"
              variant="standard"
              {...register("amount", { required: true })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={errors.date ? true : false}
              helperText={errors.date && "Date required"}
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
              label="Date"
              {...register("date", { required: true })}
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
