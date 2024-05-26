import React, { useState, useEffect } from "react";
import { getTasks, deleteTask } from "../api";

const TaskList = ({ onEdit }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const getStatusName = (status) => {
    switch (status) {
      case "pending":
        return "status-pending";
      case "in-progress":
        return "status-in-progress";
      case "completed":
        return "status-completed";
      default:
        return "";
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <button onClick={() => onEdit()}>New Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="task-info">
              <span>{task.title}</span>
              <span className={`task-status ${getStatusName(task.status)} `}>
                {task.status}
              </span>
              <span className="task-due-date">{task.dueDate}</span>
            </div>
            <div>
              <button onClick={() => onEdit(task)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
