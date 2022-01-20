import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styles from "../../styles/Home.module.css";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function DateAndTimePickers() {
  const classes = useStyles();

  return (
    <form className={styles.timerContainer} noValidate>
      <TextField
        id="datetime-local"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={styles.timerField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
