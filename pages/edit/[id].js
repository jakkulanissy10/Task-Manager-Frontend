import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import TaskForm from "../../components/TaskForm";

const API = "http://localhost:3000/tasks";

export default function EditTask() {
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${API}/${id}`, form);
    router.push("/"); // redirect back to home
  };

  return (
    <TaskForm
      form={form}
      editingId={id}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}


