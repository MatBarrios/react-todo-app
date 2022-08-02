import React from 'react';
import '../styles/App.css'; 
// import Swal from 'sweetalert2';

function CreateTodoButton(props) {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <div className='new-todo-btn-cont'>
        <button 
        className='new-todo-btn'
        onClick={onClickButton}
        >
            +
        </button>
        </div>
    )
}

export { CreateTodoButton };