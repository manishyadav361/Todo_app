export const addTodo = (text, uuidv4) => {
  return {
    type: "ADD_TODO",
    payload: { text: text, id: uuidv4 },
  };
};

export const markCompleted = (id) => {
  return {
    type: "MARK_COMPLETED",
    payload: { id: id },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: { id: id },
  };
};
