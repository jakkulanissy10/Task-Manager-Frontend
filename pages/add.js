import { useState } from "react";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import { useRouter } from "next/router";

const API = "https://task-manager-backend-rq2j.onrender.com/tasks";

// Add Form 

export default function AddTask() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  const router = useRouter();

// Handle form submission and state management 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API, form);
    router.push("/"); // redirect to homepage after submitting
  };

  return (
    <TaskForm
      form={form}
      editingId={null}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
