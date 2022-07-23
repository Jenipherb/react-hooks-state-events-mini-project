import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] =useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleAddTask(newTask){
    setTasks([...tasks, newTask])
  }

  function handleDeleteTasks(deleteTaskText){
    setTasks(tasks.filter((task) => task.text !== deleteTaskText))
  }
  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  )
  
 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter cat={CATEGORIES}
      selectedCategory={category}
      onSelectedCategory={setCategory} />
      <NewTaskForm 
        cat={CATEGORIES.filter((cat) => cat !== "All")}
        onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTasks}/>
    </div>
  );
}

export default App;
