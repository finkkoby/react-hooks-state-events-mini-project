import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filterBy, setFilterBy] = useState('All')
  const [taskList, setTaskList] = useState(TASKS)
  const [formData, setFormData] = useState({text: '', category: 'Code'})
  const [formName, setFormName] = useState('')
  const [formCategory, setFormCategory] = useState('Code')

  function handleFilterClick(e) {
    setFilterBy(e.target.innerText)
  }

  function handleRemove(text) {
    const newList = taskList.filter(task => task.text !== text)
    setTaskList(newList)
  }

  function handleNameChange(e) {
    setFormName(e.target.value)
  }

  function handleCategoryChange(e) {
    setFormCategory(e.target.value)
  }

  function onTaskFormSubmit(e, newObject) {
    setTaskList([...taskList, newObject])
    setFormName('')
    setFormCategory('Code')
  }
  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onHandleFilterClick={handleFilterClick} filterBy={filterBy}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} onNameChange={handleNameChange} onCategoryChange={handleCategoryChange} formName={formName} formCategory={formCategory} />
      <TaskList tasks={taskList} filterBy={filterBy} deleteButton={handleRemove}/>
    </div>
  );
}

export default App;
