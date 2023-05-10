import React, { useState } from 'react';
import { editTodoHandle } from '../utilities';

export default function EditTodo({ todo, setShowEditForm, onUpdate }) {
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const updatedTodo= {
      id: todo.id,
      title: updatedTitle,
      done: todo.done,
    };

    editTodoHandle(updatedTodo);

    onUpdate(updatedTodo); // update the todo in the parent component

    setShowEditForm(false);

    console.log(updatedTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <button type="submit">Save</button>
      <button onClick={() => setShowEditForm(false)}>Cancel</button>
    </form>
  );
}
