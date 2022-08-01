import React, { useEffect, useState } from "react";
import axios from "axios";
import All from "./All";
import Create from "../create/Create";
import "./style.css";

function ShowAll() {
  const URL = `/api/todo`;
  const [todo, setTodo] = useState([]);

  const fetchData = () => {
    axios
      .get(URL)
      .then((res) => {
        setTodo(res.data);
        // console.log(todo);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, [todo]);

  return (
    <div className="app">
      <div className="app_header">TODO</div>
      <div className="app_create">
        <Create />
      </div>
      {todo.map((data) => (
        <div className="app_todos">
          <All data={data} />
        </div>
      ))}
    </div>
  );
}

export default ShowAll;
