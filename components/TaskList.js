import React from "react";
import TaskItem from "../TaskItem";

function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks found. Start by adding one!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default TaskList;
