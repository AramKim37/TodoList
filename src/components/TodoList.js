import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, setUpdate, setInput }) => {
  return (
    <div className="todoList-container">
      <div className="todoList">
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.title}
              setTodos={setTodos}
              todos={todos}
              todo={todo}
              setUpdate={setUpdate}
              setInput={setInput}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
