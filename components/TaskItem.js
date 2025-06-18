import React from "react";

function TaskItem({ task, onEdit, onDelete }) {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description || "No description"}</p>
      <small>Status: {task.status} | Due: {task.dueDate || "N/A"}</small>
      <div>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;