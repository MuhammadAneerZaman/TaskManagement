"use client"
import React, { useState } from "react";
import TaskList from "./Components/TaskList/TaskList";
import TaskAdd from "./Components/TaskAdd/TaskAdd";

interface Task {
  id: number;
  title: string;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title: title,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  return (
    <div className=" text-center min-h-screen p-12 space-y-5">
      <h1 className=" text-3xl font-bold text-orange-900 "> Task Management App </h1>

      <TaskAdd onAddTask={addTask} />
      <TaskList tasks = {tasks} />
      
    </div>
  );
};

export default Home;
