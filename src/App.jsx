import React, { useEffect, useState } from "react";
import TodoItem from "./todolist.jsx";

const uid = () => Math.random().toString(36).slice(2, 9);

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos-v1");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos-v1", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const t = text.trim();
    if (!t) return;
    setTodos([{ id: uid(), text: t, completed: false }, ...todos]);
    setText("");
  };

  const toggleTodo = (id) =>
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  const removeTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div className="page">
      <div className="card">
        <header className="header">
          <h1>To Do List</h1>
        </header>

        <div className="add-row">
          <input
            className="input"
            placeholder="Tambahkan tugas.."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <button className="btn" onClick={addTodo}>
            Tambah
          </button>
        </div>

        <ul className="list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onRemove={removeTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
