import React, { useState } from "react";
import styles from "./TaskItem.module.css"; 

function TaskItem({ task, onEdit, onDelete }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="task">
        <div className = {styles.taskHeader}>
      <h3>{task.title}</h3>
       <button onClick={() => setShowOptions(!showOptions)} className = {styles.button}>
         &#8942;
      </button>

     
      {showOptions && (
        <div className = {styles.EditAddContainer}>
          <button onClick={() => onEdit(task)} className = {styles.button}>
            Edit
          </button>
          <button onClick={() => onDelete(task.id)} className = {styles.button}>
            Delete
          </button>
        </div>
      )}
      </div>
      <p>{task.description || "No description"}</p>
      <small>
        Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString("en-GB") : "N/A"}
      </small>

      {/* 3-dot toggle button */}
     
    </div>
  );
}

export default TaskItem;
