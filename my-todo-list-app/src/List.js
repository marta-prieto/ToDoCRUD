import { useEffect, useState } from 'react';


const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchList = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
            const data = await response.json();
            setTodos(data); //guardo tareas en estado
            setLoading(false); // se quita el estado Loading
        } catch (error) {
            console.error('Error fetch Lista', error);
        }
        };


        useEffect(() => {
            fetchList();
        }, []);

        //añadir mensaje de Loading - extra
        if (loading){
            return console.log('Loading')
        }

        return (
            <section>
                <p>Mis Tareas</p>
                <ul>
                   {todos.map((todo)=> (
                    <li key={todo.id}>
                        {todo.title} - {todo.completed ? 'Completed' : 'Pending'}
                        </li>
                        ))}
                
                </ul>
            </section>
        );
    
}

export default TodoList;