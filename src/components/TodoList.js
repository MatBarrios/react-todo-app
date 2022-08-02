import React from 'react';
import '../styles/App.css';

function TodoList(props) {
    return (
        <div className='todoList-cont'> 
            {props.children}
        </div>
    )
}

export { TodoList };