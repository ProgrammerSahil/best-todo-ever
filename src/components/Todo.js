import React, { useState, useRef, useEffect } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [tasks]);

  const addTask = () => {
    if (input.trim()) {
      setTasks([
        ...tasks, 
        { 
          id: Date.now(), 
          title: input, 
          completed: false 
        }
      ]);
      setInput('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed } 
        : task
    ));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      width: '300px', 
      margin: '0 auto' 
    }}>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a new task"
        style={{ 
          width: '100%', 
          padding: '10px', 
          marginBottom: '10px' 
        }}
      />
      <ul style={{ 
        listStyleType: 'none', 
        padding: 0, 
        width: '100%' 
      }}>
        {tasks.map((task) => (
          <li 
            key={task.id}
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              padding: '10px',
              backgroundColor: task.completed ? '#e0e0e0' : 'white',
              textDecoration: task.completed ? 'line-through' : 'none'
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              style={{ marginRight: '10px' }}
            />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;