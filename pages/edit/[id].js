import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import TaskForm from "../../components/TaskForm";

const API = "https://task-manager-backend-rq2j.onrender.com/tasks";

export default function EditTask() {

// Get the task ID from the URL parameters
    // Using Next.js useRouter to access the query parameters

  const router = useRouter();
  const { id } = router.query;

  // State to hold the form data for editing a task

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  // Fetch the task data when the component mounts or when the id changes

  useEffect(() => {
    if (id) {
      axios.get(`${API}/${id}`).then((res) => {
        const task = res.data;
        setForm({
          title: task.title,
          description: task.description,
          status: task.status,
          dueDate: task.dueDate ? task.dueDate.slice(0, 10) : "",
        });
      });
    }
  }, [id]);

  // Handle form changes and submission

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${API}/${id}`, form);
    router.push("/"); // redirect back to home
  };

    // Render the TaskForm component with the current form state and handlers

  return (
    <TaskForm
      form={form}
      editingId={id}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}


