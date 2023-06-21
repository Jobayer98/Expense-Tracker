import { Autocomplete, FormControl, Grid, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { useState } from "react";

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
  return (
    <FormControl fullWidth>
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
              <TextField {...params} label="Category" variant="standard" />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Amount" variant="standard" />
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Date" />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default FormData;
