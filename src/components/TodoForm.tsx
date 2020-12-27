import React, { useRef, useState, ChangeEvent } from "react";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";
import { addTodoAction } from "../reducers/todo";
import Ref from "semantic-ui-react/dist/commonjs/addons/Ref";

type TProps = {
  addTodo: Function;
};

const TodoForm: React.FC<TProps> = ({ addTodo }) => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const validateAndAdd = async () => {
    if (!content.length) {
      return;
    }

    setLoading(true);
    await addTodo(content);
    setContent("");
    setLoading(false);
  };

  /*
  useEffect(() => {
    if (inputRef?.current) {
      inputRef!.current!.removeEventListener("keypress", () => {});
      inputRef!.current!.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          validateAndAdd();
        }
      });
    }
  }, []);
   */

  return (
    <Ref innerRef={inputRef}>
      <Input
        fluid
        transparent
        disabled={loading}
        size={"huge"}
        placeholder="Write todo..."
        value={content}
        onChange={(v: ChangeEvent<HTMLInputElement>) => {
          setContent(v.target.value);
        }}
        action={{
          content: "Add",
          color: "teal",
          size: "big",
          onClick: validateAndAdd,
        }}
      />
    </Ref>
  );
};

export default connect(null, {
  addTodo: addTodoAction,
})(TodoForm);
