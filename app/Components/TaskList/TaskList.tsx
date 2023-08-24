"use client"
import React from "react";

interface Task {
  id: number;
  title: string;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li className="  text-xl text-orange-900" key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};

export default TaskList;
