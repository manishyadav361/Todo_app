import { Box, Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { completed } from "../Redux/Actions";
import useStyles from "../TodosStyles";
import Todo from "./Todo";

function FilterTodo(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    all: true,
    completed: false,
    incomplete: false,
  });

  return (
    <>
      <Box className={`${classes.filter}`}>
        <Button
          variant={state.all ? "contained" : "outlined"}
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            setState({
              ...state,
              all: true,
              completed: false,
              incomplete: false,
            });
          }}
        >
          All
        </Button>
        <Button
          className={`${classes.completeBtn}`}
          variant={state.completed ? "contained" : "outlined"}
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            setState({
              ...state,
              all: false,
              completed: true,
              incomplete: false,
            });
          }}
        >
          Completed
        </Button>
        <Button
          variant={state.incomplete ? "contained" : "outlined"}
          color="primary"
          onClick={(e) =>
            setState({
              ...state,
              all: false,
              completed: false,
              incomplete: true,
            })
          }
        >
          InComplete
        </Button>
      </Box>
      <Grid container justifyContent="center" alignItems="center">
        {state?.all &&
          props?.todos?.map((todo) => (
            <Todo
              text={todo.text}
              status={todo.status}
              key={todo.id}
              id={todo.id}
            />
          ))}
        {state?.completed &&
          props.complete.map((todo) => (
            <Todo
              text={todo.text}
              status={todo.status}
              key={todo.id}
              id={todo.id}
            />
          ))}
        {state?.incomplete &&
          props.incomplete.map((todo) => (
            <Todo
              text={todo.text}
              status={todo.status}
              key={todo.id}
              id={todo.id}
            />
          ))}
      </Grid>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    complete: state.todos.filter((todo) => todo.status === true),
    incomplete: state.todos.filter((todo) => todo.status !== true),
  };
};

export default connect(mapStateToProps, null)(FilterTodo);
