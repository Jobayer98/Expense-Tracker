import {
  Autocomplete,
  Button,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm } from "react-hook-form";

const typeData = [{ title: "Income" }, { title: "Expense" }];

const category = [
  { title: "Bills" },
  { title: "Car" },
  { title: "Travel" },
  { title: "Food" },
  { title: "Shopping" },
  { title: "House" },
  { title: "Others" },
];

const FormData = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <FormControl fullWidth>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Autocomplete
              clearOnEscape
              defaultValue={{ title: "Income" }}
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Date" {...register("date")} />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Button type="submit" sx={{ my: "16px" }} variant="outlined" fullWidth>
          Create
        </Button>
      </form>
    </FormControl>
  );
};

export default FormData;
