import React from "react";

export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="todo-item">
      <button
        className={`check ${todo.completed ? "checked" : ""}`}
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? "Uncheck" : "Check"}
      >
        {todo.completed ? "✓" : ""}
      </button>

      <span className={`text ${todo.completed ? "done" : ""}`}>
        {todo.text}
      </span>

      <button
        className="delete"
        onClick={() => onRemove(todo.id)}
        title="Hapus"
      >
        ×
      </button>
    </li>
  );
}
