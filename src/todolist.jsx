import React from 'react'

export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="todo-item">
      <button
        className={`check ${todo.completed ? 'checked' : ''}`}
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Uncheck' : 'Check'}
      >
        {todo.completed && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      <span className={`text ${todo.completed ? 'done' : ''}`}>{todo.text}</span>

      <button className="delete" onClick={() => onRemove(todo.id)} title="Hapus">×</button>
    </li>
  )
}
