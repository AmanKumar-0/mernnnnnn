import React from "react";
import Com from "../Completed/Com";
import Delete from "../Delete/Delete";
import "./style.css";

function All({ data, index }) {
  return (
    <div className="todo_box">
      <p>{index + 1}.</p>
      <div className={data.completed ? "todo_details_border" : "todo_details"}>
        {data.completed && <i className=" fa-solid fa-check"></i>}

        <h5>{data.title}</h5>
        <div className="todo_delete">
          <Com data={data} />
          <Delete id={data._id} />
        </div>
      </div>
    </div>
  );
}

export default All;
