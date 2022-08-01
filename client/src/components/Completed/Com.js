import React, { useState } from "react";
import axios from "axios";
import "./style.css";
function Com({ data, id }) {
  const [newData, setNewData] = useState({});

  const handleClick = (data) => {
    setNewData(data);
    newData.completed = true;

    try {
      axios
        .put(`http://localhost:8000/api/todo/${data._id}`, newData)
        .then((res) => console.log(res.data.message));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="todo_complete">
      <button
        className={data.completed ? "todo_complete" : "todo_completed"}
        onClick={() => handleClick(data)}
      >
        Mark as completed
      </button>
    </div>
  );
}

export default Com;
