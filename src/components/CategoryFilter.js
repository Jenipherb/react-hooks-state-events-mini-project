import React from "react";

function CategoryFilter({cat, selectedCategory, onSelectedCategory}) {
  // console.log(category)
  // console.log(selectedCategory)
  // console.log(onSelectedCategory)
  const catButton = cat.map((category) =>{
    const className = category === selectedCategory ? "selected" : null;
    return(
      <button
        key={category}
        className={className}
        onClick={() => onSelectedCategory(category)}>
          {category}
        </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catButton}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
