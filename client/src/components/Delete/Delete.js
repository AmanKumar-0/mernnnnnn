import axios from "axios";
import React from "react";
import "./style.css";
function Delete({ id }) {
  function handleDelete(id) {
    axios
      .delete(`/api/todo/${id}`)
      .then((res) => console.log(res.data.message));
  }
  return (
    <div className="todo_deleted">
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}

export default Delete;
