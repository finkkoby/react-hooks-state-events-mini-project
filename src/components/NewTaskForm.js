import React from "react";

function NewTaskForm({ onNameChange, onCategoryChange, formName, formCategory, categories, onTaskFormSubmit }) {
  const optionsArray = categories.map(category => {
    if(category !== 'All') return <option value={category} key={category}>{category}</option>
  })

  return (
    <form className="new-task-form" onSubmit={e => {
      e.preventDefault();
      const newObject = {
        text: formName,
        category: formCategory
      }
      onTaskFormSubmit(e, newObject)
      }}>
      <label>
        Details
        <input type="text" name="text" onChange={onNameChange} value={formName}/>
      </label>
      <label>
        Category
        <select name="category" value={formCategory} onChange={onCategoryChange} >
          {optionsArray}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
