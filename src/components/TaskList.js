import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {
  //console.log(tasks)
  const taskList = tasks.map((task) =>(
    <Task 
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
      />
    ))
  return (
    <div className="tasks">
      {taskList}  
      {/* display a list of tasks using Task component */}
    </div>
  )
}

export default TaskList;
