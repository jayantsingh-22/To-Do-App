import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

const App = () => {
  const [editingTask, setEditingTask] = useState(null);

  const handleSave = () => {
    setEditingTask(null);
  };

  return (
    <div className="container">
      {editingTask !== null ? (
        <TaskForm task={editingTask} onSave={handleSave} />
      ) : (
        <TaskList onEdit={setEditingTask} />
      )}
    </div>
  );
};

export default App;
