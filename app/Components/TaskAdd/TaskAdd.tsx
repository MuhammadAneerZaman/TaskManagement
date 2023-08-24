"use client"

import React, { useState } from "react";

interface taskFormProps {
  onAddTask: (title: string) => void;
}

const taskForm: React.FC<taskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className=" space-x-2">
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className=" input "
      />

      <button type="submit" className=" btn glass ">
        {" "}
        Add Task{" "}
      </button>
    </form>
  );
};

export default taskForm;