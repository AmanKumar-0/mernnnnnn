import { useState } from "react";
import axios from "axios";
import "./style.css";
function Create() {
  const URL = "/api/todo";
  const [data, setData] = useState({ title: "" });
  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(URL, data)
      .then((res) => {
        setData({ title: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
  }

  return (
    <div className="create">
      <p>Add a new task in the list</p>
      <form onSubmit={handleSubmit}>
        <input
          className="input_task"
          type="text"
          name="title"
          value={data.title}
          placeholder="Enter the task here"
          onChange={handleChange}
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
