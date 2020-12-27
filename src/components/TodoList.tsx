import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dimmer, Loader, Message } from "semantic-ui-react";
import { TTodo } from "../types";
import TodoItem from "./TodoItem";
import { TodoListWrapper, CustomIcon } from "./Styles";
import { getTodosAction } from "../reducers/todo";

type TProps = {
  todos: TTodo[];
  getTodos: Function;
};

const TodoList: React.FC<TProps> = ({ todos, getTodos }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTodos = async () => {
      await getTodos();
      setLoading(false);
    };

    loadTodos();
  }, []);
  return (
    <TodoListWrapper>
      {loading ? (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      ) : !todos.length ? (
        <Message
          icon={<CustomIcon>😴</CustomIcon>}
          header="Nothing to do!"
          content="Stop being lazy and do something, start adding your first to do."
        />
      ) : (
        todos.map((todo, index) => (
          <TodoItem key={`${todo.id}-${todo.completed}`} todo={todo} />
        ))
      )}
    </TodoListWrapper>
  );
};

const mapStateToProps = ({ todo }: any) => ({
  todos: todo.todos,
});

export default connect(mapStateToProps, { getTodos: getTodosAction })(TodoList);
