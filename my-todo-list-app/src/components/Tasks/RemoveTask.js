import React from 'react';
import bin from './images/bin.svg';

const Task = ({ task, deleteTask }) => {
  return (
    <li>
      {task.title}
      <button className="button__icon-bin" onClick={() => deleteTask(task.id)}><img src={bin} alt="icono papelera" /></button>
    </li>
  );
};

export default Task;