import React, { useContext } from 'react';
import '../styles/App.css';
import { TodoContext } from './TodoContext';


function TodoCounter() {
    const { totalTodos, completedTodos } = useContext(TodoContext);

    return (
        <h2 
        className='todoCounter'> 
        Has completado {completedTodos} de {totalTodos} TODOS
        </h2>
    )
}

export { TodoCounter };