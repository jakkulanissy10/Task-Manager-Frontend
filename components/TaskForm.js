import React from "react";

function TaskForm({ form, editingId, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <select name="status" value={form.status} onChange={handleChange} required>
        <option value="">Select Status</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
      <button type="submit">{editingId ? "Update Task" : "Add Task"}</button>
    </form>
  );
}

export default TaskForm;