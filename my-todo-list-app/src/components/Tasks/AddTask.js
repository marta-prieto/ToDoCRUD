import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  //formulario-enviar
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const task = {
        id: Math.random(), // creamos un ID 
        title: newTask,
        completed: false // Nueva tarea incompleta
      };
      addTask(task); // Añadir la nueva tarea
      setNewTask(''); // Limpiar el campo de entrada
    }
  };

  return ( 
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Añadir nueva tarea"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
    />
    <button type="submit">Añadir</button>
  </form>
  );
};

export default AddTask;