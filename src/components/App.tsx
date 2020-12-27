import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Container, Wrapper, ViewModeToggler } from "./Styles";

const App: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <TodoList />
        <TodoForm />
      </Wrapper>

      <ViewModeToggler>
        <div className="ui toggle checkbox">
          <input type="checkbox" className="hidden" />
          <label>Dark Mode</label>
        </div>
      </ViewModeToggler>
    </Container>
  );
};

export default App;
