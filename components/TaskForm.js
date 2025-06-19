import React from "react";
import styles from  "./TaskForm.module.css"; 

function TaskForm({ form, editingId, handleChange, handleSubmit }) {
  return (
<>
     <h1 className = {styles.head}>New Task</h1> 
    <div className = {styles.taskFormContainer}>
      
    <form onSubmit={handleSubmit} className="form">
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required /><br/>
      <hr/>
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" /><br/>
      <hr/>
      <select name="status" value={form.status} onChange={handleChange} required>
        <option value="">Select Status</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select><br/>
      <hr/>
      <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} /><br/>
      <hr/>
      <button type="submit" className = {styles.editDeleteButton}>{editingId ? "Update Task" : "Create New Task"}</button>
    </form>
    </div>
    </>
  );
}

export default TaskForm;