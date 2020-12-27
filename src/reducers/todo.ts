import { TTodo } from "../types";
import { addTodo, updateTodo, deleteTodo, getTodos } from "../api";

// ACTION TYPES
export const SET_TODOS = "SET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

// ACTIONS
export const getTodosAction = () => async (dispatch: Function) => {
  const response = await getTodos();
  dispatch({
    type: SET_TODOS,
    payload: response,
  });
};

export const addTodoAction = (content: string) => async (
  dispatch: Function
) => {
  const response = await addTodo(content);

  dispatch({
    type: ADD_TODO,
    payload: response,
  });
};

export const updateTodoAction = (id: number, content: string) => async (
  dispatch: Function
) => {
  const response = await updateTodo(id, { content });

  dispatch({
    type: UPDATE_TODO,
    payload: response,
  });
};

export const toggleTodoAction = (id: number, completed: boolean) => async (
  dispatch: Function
) => {
  await updateTodo(id, { completed });

  dispatch({
    type: TOGGLE_TODO,
    payload: id,
  });
};

export const deleteTodoAction = (id: number) => async (dispatch: Function) => {
  await deleteTodo(id);

  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};

// SELECTORS
export const getTodoById = (state: any, id: number) =>
  state.todos.find((todo: TTodo) => todo.id === id);

// INITIAL STATE
const initialState = {
  todos: [],
};

// REDUCER
const TodoReducer = (
  state: { todos: TTodo[] } = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case SET_TODOS: {
      return {
        todos: action.payload,
      };
    }
    case ADD_TODO: {
      return {
        todos: [...state.todos, action.payload],
      };
    }
    case TOGGLE_TODO: {
      const todos = [...state.todos];
      const todo = todos.find((t) => t.id === action.payload);
      todo!.completed = !todo!.completed;

      return {
        todos,
      };
    }
    case DELETE_TODO: {
      return {
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    }
    case UPDATE_TODO: {
      const todos = [...state.todos];
      const index = todos.findIndex((t) => t.id === action.payload.id);
      todos[index] = action.payload;

      return {
        todos,
      };
    }
    default:
      return state;
  }
};

export default TodoReducer;
