import React from 'react';
import './todo.css';

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
  <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
    <div className="content">
      <p className="">{todo.text}</p>
      <p className="">({todo.category})</p>
    </div>
    <div className="">
      <button className="complete" onClick={() =>completeTodo(todo.id)}>Completar</button>
      <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  </div>
  )
}

export default Todo;
