import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { connect } from "react-redux";
import { deleteTodo, markCompleted } from "../Redux/Actions";
import useStyles from "./TodoStyles";

function Todo(props) {
  const statusHandler = () => {
    props.markCompleted(props.id);
  };

  const deleteTodo = () => {
    props.deleteTodo(props.id);
  };

  const classes = useStyles();

  return (
    <>
      <Grid container className={`${classes.grid}`}>
        <Box className={`${classes.box}`}>
          <Typography
            className={`${classes.typography} `}
            // variant="p"
            color="textPrimary"
            noWrap
          >
            {props.text}
          </Typography>
          <IconButton
            // color="success"
            className={`${classes.tick}`}
            variant="filled"
            onClick={() => statusHandler()}
          >
            <CheckIcon />
          </IconButton>
          <IconButton
            className={`${classes.delete}`}
            variant="contained"
            color="secondary"
            edge="end"
            onClick={() => deleteTodo()}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Grid>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    markCompleted: (id) => dispatch(markCompleted(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
