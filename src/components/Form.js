import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const Form = ({ input, setInput, todos, setTodos, update, setUpdate }) => {
  const updated = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setUpdate("");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (update) {
      setInput(update.title);
    } else {
      setInput("");
    }
  }, [setInput, update]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!update) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updated(input, update.id, update.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit} className="input-container">
      <div className="input-field">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo List"
          value={input}
          required
          onChange={handleInput}
        />
        <div className="input-field">
          <button className="add-btn" type="submit">
            {update ? (
              <ThumbUpOffAltIcon style={{ fontSize: 35 }} />
            ) : (
              <AddBoxIcon style={{ fontSize: 35 }} />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
