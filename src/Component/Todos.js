import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../Redux/Actions";
import { v4 as uuidv4 } from "uuid";
import { Box, Button, TextField } from "@material-ui/core";
import useStyles from "../TodosStyles";
import FilterTodo from "./FilterTodo";
function Todos(props) {
  const [text, setText] = useState("");
  const classes = useStyles();
  const addTodoList = (e) => {
    e.preventDefault();
    let id = uuidv4();

    props.addTodo(text, id);
    setText("");
  };
  return (
    <>
      <Box>
        <form
          className={`${classes.form}`}
          autoComplete="off"
          noValidate
          onSubmit={(e) => addTodoList(e)}
        >
          <TextField
            className={`${classes.textField}`}
            variant="outlined"
            size="small"
            label="Todo"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <Button
            color="primary"
            size="medium"
            variant="contained"
            className={`${classes.button}`}
          >
            Submit
          </Button>
        </form>
        <FilterTodo />
      </Box>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text, id) => dispatch(addTodo(text, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
