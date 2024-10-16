import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const task = {
        id: Math.random(), // Generar un ID único
        title: newTask,
        completed: false
      };
      addTask(task); // Añadir la nueva tarea
      setNewTask(''); // Limpiar el campo de entrada
    }
  };

  return (
    <div>
      <h2>Añadir Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nueva tarea" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
};

export default AddTask;