import React from "react";

function CategoryFilter({ categories, onHandleFilterClick, filterBy }) {
  
  const buttons = categories.map(category => {
    return (<button key={category} onClick={onHandleFilterClick} name={category} className={filterBy === category ? 'selected' : ''}>{category}</button>)
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
