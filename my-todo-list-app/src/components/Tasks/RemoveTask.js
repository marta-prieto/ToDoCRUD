import React from 'react';
import bin from './images/bin.svg';

const Task = ({ task, deleteTask }) => {
  return (
    <li>
      <div className="task__container">
      <p className="task__title">{task.title}</p>
      <p className="task__description">{task.description}</p>
      </div>
      <button className="button__icon-bin" onClick={() => deleteTask(task.id)}><img src={bin} alt="icono papelera" /></button>
    </li>
  );
};

export default Task;