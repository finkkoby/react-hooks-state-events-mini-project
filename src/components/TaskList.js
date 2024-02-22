import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Task from "./Task";

function TaskList({ tasks, filterBy, onHandleRemove }) {
  

  const filteredTasks = tasks.filter(task => {
    if (filterBy === 'All') return true;

    return task.category === filterBy
  })

  const makeTasks = filteredTasks.map(task => {
    return <Task text={task.text} category={task.category} key={uuid()} onHandleRemove={onHandleRemove} />
  })

  return (
    <div className="tasks">
      {makeTasks}
    </div>
  );
}

export default TaskList;
