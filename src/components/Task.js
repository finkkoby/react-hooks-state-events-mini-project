import React from "react";

function Task({ text, category, onHandleRemove}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onHandleRemove}>X</button>
    </div>
  );
}

export default Task;
