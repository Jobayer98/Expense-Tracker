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

const AllTransaction = () => {
  const transactions = [
    { id: 1, type: "Income", category: "Salary", date: "Wed Dec 23" },
    { id: 2, type: "Expence", category: "Salary", date: "Wed Dec 23" },
    { id: 3, type: "Income", category: "Salary", date: "Wed Dec 23" },
    { id: 4, type: "Income", category: "Salary", date: "Wed Dec 23" },
  ];

  return (
    <List dense={false} className={classes.list}>
      {transactions.map((item) => (
        <Slide key={item.id} in mountOnEnter unmountOnExit>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
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
            <ListItemText primary={item.type} />
          </ListItem>
        </Slide>
      ))}
    </List>
  );
};

export default AllTransaction;
