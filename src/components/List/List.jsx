import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Slide,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import { green, red } from "@mui/material/colors";
import classes from "./List.module.css";
import { useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";

const AllTransaction = () => {
  const { transactions, removeExpenseOrIncome } = useContext(ExpenseContext);

  const handleRemove = (id) => {
    removeExpenseOrIncome(id);
  };

  return (
    <List dense={false} className={classes.list}>
      {transactions.map((item) => (
        <Slide key={item.id} in mountOnEnter unmountOnExit>
          <ListItem
            secondaryAction={
              <IconButton
                onClick={() => handleRemove(item.id)}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar
                sx={
                  item.type === "Income"
                    ? { bgcolor: green[500] }
                    : { bgcolor: red[500] }
                }
              >
                <MoneyOffIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.type}
              secondary={`$${item.amount} - ${item.date}`}
            />
          </ListItem>
        </Slide>
      ))}
    </List>
  );
};

export default AllTransaction;
