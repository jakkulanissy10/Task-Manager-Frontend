import { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "../components/TaskList";
import { useRouter } from "next/router";

const API = "http://localhost:3000/tasks";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const router = useRouter();

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  const handleEdit = (task) => {
    router.push({
      pathname: `/edit/${task.id}`,
    });
    // In Next.js, we re-fetch in edit page instead of passing state
  };

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">All</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <TaskList
        tasks={filteredTasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
