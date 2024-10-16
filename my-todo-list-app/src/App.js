

import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/AddHeader';
import Form from './components/AddForm';
import TodoList from './components/AddTodoList';
import Refund from './components/AddRefund';
import Comunication from './components/AddComunication';
import Friend from './components/AddFriend';
import Tasks from './components/Task';
import AddTask from './components/AddTask';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
 
  // Función para obtener las tareas desde una API (con completed: false)
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // Ejemplo de API
        const result = await response.json();
        const incompleteTasks = result.filter(task => task.completed === false); // Filtra por "completed: false"
        setTasks(incompleteTasks.slice(0, 3)); // Solo las primeras 3 tareas incompletas
      } catch (error) {
        console.error('Error al obtener las tareas:', error);
      }
    };
    
    fetchTasks();
  }, []);

  // Función para agregar una tarea
  const addTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  return (

    <Router>
      <div className="App">
        <Header />
      

        <main>
          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/list" element={<TodoList />} />
            <Route path="/" element={<Tasks tasks={tasks} deleteTask={deleteTask} />} />
            <Route path="/add-task" element={<AddTask addTask={addTask} />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/comunication" element={<Comunication />} />
            <Route path="/friend" element={<Friend />} />
          </Routes>
        </main>
        <footer>
        </footer>
      </div>
    </Router>
  );

}

export default App;