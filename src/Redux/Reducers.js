const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      state.todos.push({
        text: action.payload.text,
        status: false,
        id: action.payload.id,
      });
      return {
        ...state,
        todos: [...state.todos],
      };

    case "MARK_COMPLETED":
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.status = !todo.status;
        }
      });
      return {
        ...state,
        todos: [...state.todos],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: [
          ...state.todos.filter(
            (todoItem) => action.payload.id !== todoItem.id
          ),
        ],
      };

    default:
      return state;
  }
};
export default todoReducer;
