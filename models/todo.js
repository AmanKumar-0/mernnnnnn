// models/todo.js
const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: "String",
    required: true,
  },
  completed: {
    type: "Boolean",
    default: 0,
  },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
