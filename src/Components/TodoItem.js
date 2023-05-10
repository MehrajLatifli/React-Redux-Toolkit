import React, { useState } from "react";
import EditTodo from "./EditTodo";

export default function TodoItem({ todo, onDelete, onUpdate }) {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEdit = () => {
    setShowEditForm(true);
  };

  const handleUpdate = () => {
    onUpdate(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.title);
  };

  return (
    <ul>
      <span style={{ textDecoration: todo.done ? "line-through" : false }}>
        {todo.title}
      </span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
      {showEditForm && (
        <EditTodo
          todo={todo}
          setShowEditForm={setShowEditForm}
          onUpdate={handleUpdate}
        />
      )}
    </ul>
  );
}
