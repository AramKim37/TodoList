import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header.js";
import TodoList from "./components/TodoList.js";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div>
        <Header />
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            update={update}
            setUpdate={setUpdate}
          />
        </div>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setUpdate={setUpdate}
          setInput={setInput}
        />
      </div>
    </div>
  );
}

export default App;
