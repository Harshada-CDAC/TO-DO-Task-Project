
import React, { useState, useEffect } from 'react';

const EditTodo = ({ todo, onUpdate }) => {
  const [task, setTask] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onUpdate(todo.id, task);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Edit task"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditTodo;
