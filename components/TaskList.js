import React from "react";
import TaskItem from "./TaskItem";
import styles from './TaskList.module.css';

function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <div>
      <h1 className = {styles.heading}>Your tasks</h1>

      <div className={styles.TaskListContainer}>
        {tasks.length === 0 ? (
          <p className={styles.para}>No tasks found. Start by adding one!</p>
        ) : (
          <div className={styles.cardWrapper}>
            {tasks.map((task) => (
                <div className={styles.taskCard} key={task.id}>
                <TaskItem task={task} onEdit={onEdit} onDelete={onDelete} />
                </div>
            ))}
            </div>

        )}
      </div>
    </div>
  );
}

export default TaskList;

