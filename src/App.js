import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem.js";
import todoData from "./todoData";
export default function App() {
  let data = todoData.map(item => {
    return <TodoItem key={item.id} item={item} />;
  });
  return <div className="todo-list">{data}</div>;
}
