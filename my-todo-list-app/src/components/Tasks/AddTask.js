import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');


  //formulario-enviar
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() && taskDescription.trim()) {
      const task = {
        id: Math.random(), // creamos un ID 
        title: taskName,
        description: taskDescription,
        completed: false // Nueva tarea incompleta
      };
      addTask(task); // Añadir la nueva tarea
      setTaskName('');
      setTaskDescription(''); // Limpiar el campo de entrada
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre</label>
      <input
        type="text"
        placeholder="Nombre"
        required
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <label>Descripción</label>
      <input
        type="text"
        placeholder="Descripción"
        id="description"
        required
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />

      <button className="modal__button-add" type="submit">Guardar</button>
    </form>
  );
};

export default AddTask;