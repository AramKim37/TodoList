import React from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import EditOffOutlinedIcon from "@mui/icons-material/EditOffOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";

const Todo = ({ text, todos, setTodos, todo, setUpdate, setInput }) => {
  function getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //janvier = 0
    let yyyy = today.getFullYear();

    return `${yyyy}-${mm}-${dd}`;
    //return dd + '/' + mm + '/' + yyyy; // change form if you need
  }

  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    setInput("");
  };

  const handleUpdate = ({ id }) => {
    const findTodo = todos.find((el) => el.id === todo.id);
    setUpdate(findTodo);
  };

  const handleComplete = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };

  return (
    <div className="todo-container">
      <div className={`todo-date ${todo.completed ? "complete" : ""}`}>
        {getDate()}
      </div>
      <li className={`list ${todo.completed ? "complete" : ""}`}>{text}</li>
      {/* <div className="btn-list"> */}
      <button onClick={handleDelete}>
        <DeleteSweepOutlinedIcon className="btn" />
      </button>
      <button onClick={handleUpdate}>
        <EditOffOutlinedIcon className="btn" />
      </button>
      <button onClick={handleComplete}>
        <DoneOutlineIcon className="btn" />
      </button>
    </div>
    // </div>
  );
};

export default Todo;
