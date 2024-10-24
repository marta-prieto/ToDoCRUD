import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState(''); /// seteamos nombre, y devolvemos estado de input nombre vacio
  const [taskDescription, setTaskDescription] = useState(''); // seteamos descripción y devolvemos estado de input descripción vacio


  //formulario-enviar
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() && taskDescription.trim()) { //eliminamos espacios
      const task = {
        id: Math.random(), // creamos un ID 
        title: taskName,
        description: taskDescription,
        completed: false // Nueva tarea incompleta
      };
      console.log("task", task)
      console.log("task id", task.id)
      addTask(task); // Añadir la nueva tarea
      setTaskName(''); //Limpiamos el campo de entrada de nombre
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