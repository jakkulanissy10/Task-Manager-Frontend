import { useState } from "react";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import { useRouter } from "next/router";

const API = "http://localhost:3000/tasks";

export default function AddTask() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API, form);
    router.push("/"); // redirect to homepage after adding
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
