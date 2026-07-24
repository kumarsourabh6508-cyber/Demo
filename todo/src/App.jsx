import React, { useEffect, useState } from 'react'
import { SquarePlus, Trash2, Pencil, Check } from "lucide-react";
import { v4 as uuid } from 'uuid'
import '../src/styles/AppC.css'

const App = () => {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handelForm = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const newData = { id: uuid(), task: input, completed: false };
    setTodo([...todo, newData]);
    setInput('');
  }

  const handelCompleted = (id) => {
    const updataTodos = todo.map((obj) => {
      if (obj.id === id) {
        return { ...obj, completed: !obj.completed }
      }
      return obj;
    })
    setTodo(updataTodos);
  }

  const handelDalete = (id) => {
    const upData = todo.filter((obj) => obj.id !== id);
    setTodo(upData);
  };

  // Edit start
  const handelEditStart = (data) => {
    setEditId(data.id);
    setEditText(data.task);
  };

  // Edit save
  const handelEditSave = (id) => {
    if (editText.trim() === '') return;
    const updataTodos = todo.map((obj) => {
      if (obj.id === id) {
        return { ...obj, task: editText };
      }
      return obj;

    });
    setTodo(updataTodos);
    setEditId(null);
    setEditText('');
  };

  useEffect(() => {
    const storedData = localStorage.getItem('todo');
    if (storedData) {
      setTodo(JSON.parse(storedData))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  return (
    <div className="container">

      <h1>Todo App</h1>

      <form onSubmit={handelForm}>
        <input
          type="text"
          placeholder="Enter Your Task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">
          <SquarePlus size={20} />
        </button>
      </form>

      <div className="todo-list">

        {todo.length === 0 ? (
          <p>hell Enter your task </p>
        ) : (
          todo.map((data) => (
            <div className="todo-item" key={data.id}>

              <input
                type="checkbox"
                checked={data.completed}
                onChange={() => handelCompleted(data.id)}
              />

              {editId === data.id ? (
                <input
                  type="text"
                  className="edit-input"
                  value={editText}
                  autoFocus
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handelEditSave(data.id);
                  }}
                />
              ) : (
                <p
                  style={{
                    textDecoration: data.completed
                      ? "line-through"
                      : "none",
                  }}
                >
                  {data.task}
                </p>
              )}

              {editId === data.id ? (
                <button onClick={() => handelEditSave(data.id)}>
                  <Check size={18} />
                </button>
              ) : (
                <button onClick={() => handelEditStart(data)}>
                  <Pencil size={18} />
                </button>
              )}

              <button onClick={() => handelDalete(data.id)}>  
                <Trash2 size={18} />
              </button>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default App