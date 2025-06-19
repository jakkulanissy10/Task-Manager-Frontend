import { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "../components/TaskList";
import { useRouter } from "next/router";
import Link from 'next/link';
import styles from './index.module.css'



const API = "https://task-manager-backend-rq2j.onrender.com/tasks";

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
   
  };

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <>
    
    <div className = {styles.topBar}>
        
        <div className={styles.actions}>
            <h1 className = {styles.header}>Hello, User!</h1>
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">All</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      </div>
          
      <TaskList
        tasks={filteredTasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Link href="/add">
  <button className = {styles.AddTaskButton}>Add Task</button>
</Link>

    </div>
    </>
  );
}
