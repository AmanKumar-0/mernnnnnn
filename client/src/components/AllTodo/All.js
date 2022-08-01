import React from "react";
import Com from "../Completed/Com";
import Delete from "../Delete/Delete";
import "./style.css";

function All({ data }) {
  return (
    <div className="todo_box">
      <div className={data.completed ? "todo_details_border" : "todo_details"}>
        {data.title}
        <div className="todo_delete">
          <Com data={data} />
          <Delete id={data._id} />
        </div>
      </div>
    </div>
  );
}

export default All;
