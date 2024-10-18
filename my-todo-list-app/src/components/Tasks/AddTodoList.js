import Task from './RemoveTask';
import AddTask from './AddTask';
import Modal from './Modal';
import { useEffect, useState } from 'react';

const TodoList = () => {
        const [tasks, setTasks] = useState([]); // Estado para las tareas
        const [showModal, setShowModal] = useState(false); // Estado para controlar el modal
        const [loading, setLoading] = useState(true);

        // Función para obtener las tareas desde la API (solo las incompletas)
        useEffect(() => {
                const fetchTasks = async () => {
                        try {
                                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                                const result = await response.json();
                                const incompleteTasks = result.filter(task => task.completed === false); // Filtra por "completed: false"
                                setTasks(incompleteTasks.slice(0, 3)); // Solo muestra las primeras 3 tareas incompletas
                        } catch (error) {
                                console.error('Error al mostrar las tareas:', error);
                        } finally {
                                setLoading(false); // Cambia el estado de carga al final
                        }
                };

                fetchTasks();
        }, []);

        // Función para añadir una nueva tarea
        const addTask = (newTask) => {
                setTasks([newTask, ...tasks]); // nueva al principio
                setShowModal(false); // Cierra modal después de añadir la tarea
        };

        // Función para eliminar una tarea
        const deleteTask = (id) => {
                setTasks(tasks.filter(task => task.id !== id)); // Filtra para eliminar la tarea
        };

        return (
                <div className='section'>
                        <p>Mis Tareas</p>

                        {/* Renderizado tareas */}
                        {loading ? (
                                <p>Cargando tareas...</p>
                        ) : (
                                <ul className='task__list'>
                                        {tasks.length === 0 ? (
                                                <p>No hay tareas incompletas.</p>
                                        ) : (
                                                tasks.map(task => (
                                                        <Task key={task.id} task={task} deleteTask={deleteTask} />
                                                ))
                                        )}
                                </ul>
                        )}
                        {/* Botón modal */}
                        <button className="button__add-task" onClick={() => setShowModal(true)}>Añadir Tarea</button>

                        {/* Modal para añadir tarea */}
                        {showModal && (
                                <Modal closeModal={() => setShowModal(false)}>
                                        <AddTask addTask={addTask} />
                                </Modal>
                        )}
                </div>
        );
};

export default TodoList;