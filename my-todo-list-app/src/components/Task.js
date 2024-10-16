import React from 'react';

const Tasks = ({ tasks, deleteTask }) => {
  return (
    <div>
      <h2>Mis Tareas</h2>
      <ul>
        {tasks.length === 0 ? (
          <p>No hay tareas incompletas.</p>
        ) : (
          tasks.map(task => (
            <li key={task.id}>
              {task.title} 
              <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Tasks;