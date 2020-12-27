import React from "react";
import { connect } from "react-redux";
import { Icon, Button } from "semantic-ui-react";
import { TTodo } from "../types";
import { toggleTodoAction, deleteTodoAction } from "../reducers/todo";
import { TodoItemWrapper, TodoContent } from "./Styles";

type TProps = {
  todo: TTodo;
  toggleTodo: Function;
  deleteTodo: Function;
};

const TodoItem: React.FC<TProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <TodoItemWrapper vertical>
      <div>
        <Icon
          size={"large"}
          name={todo.completed ? "check circle outline" : "circle outline"}
          color={todo.completed ? "teal" : "black"}
          onClick={() => toggleTodo(todo.id, !todo.completed)}
        />
        <TodoContent completed={todo.completed}>{todo.content}</TodoContent>
      </div>
      <Button.Group>
        <Button
          basic
          circular
          icon={"delete"}
          onClick={(e) => {
            e.stopPropagation();
            deleteTodo(todo.id);
          }}
        />
      </Button.Group>
    </TodoItemWrapper>
  );
};

export default connect(null, {
  toggleTodo: toggleTodoAction,
  deleteTodo: deleteTodoAction,
})(TodoItem);
