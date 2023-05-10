import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../stores/todo";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

export default function TodoItems() {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleUpdate = (updatedTodo) => {
    dispatch(editTodo(updatedTodo));
  };

  const handleDelete = (title) => {
    dispatch(deleteTodo(title));
  };

  return (
    <div>
      {todos.map((todo, key) => (
        <TodoItem
          key={key}
          todo={todo}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}
