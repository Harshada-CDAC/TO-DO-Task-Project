
import React from 'react';

const TodoItem = ({ todo, onDelete, onEdit, onComplete }) => {
  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span>{todo.task}</span>
      <button onClick={() => onComplete(todo.id)}>Complete</button>
      <button onClick={() => onEdit(todo.id)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
