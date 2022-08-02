import React from 'react';
import '../styles/App.css';

function TodoItem(props) {

    return (
        <li className='todoItem'>

            <span 
            className={`icon-check ${props.completed && 'icon-check-active'}`}
            onClick={props.onComplete}
            >
                ✔
            </span>

            <p 
            className={`todoItem-text ${props.completed && 'todoItem-completed'}`
            }>
            {props.text}
            </p>

            <span 
            className='icon-deleted'
            onClick={props.onDelete}
            >
                x
            </span>
        </li>
    )
}

export { TodoItem };