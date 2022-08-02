import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import '../styles/TodoForm.css'

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = useState('');

    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo To Do</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Recordar que..."
            />

            <div className="TodoForm-buttonContainer">
            <button
                className="TodoForm-button TodoForm-button--cancel" 
                type="button"
                onClick={onCancel}
                >
                    Cancelar
            </button>

            <button
                className="TodoForm-button TodoForm-button--add"
                type="submit"
                >
                    Agregar
                </button>
            </div>


        </form>
    );
}

export { TodoForm };
