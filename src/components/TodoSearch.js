import React, { useContext } from 'react';
import '../styles/App.css';
import { TodoContext } from './TodoContext';

function TodoSearch() {

    const { searchValue, setSearchValue } = useContext(TodoContext);

    const onSearchValueChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }

    return [
        <div className='todoSearch-cont'>
        <input 
        className='todoSearch' 
        placeholder='Buscar'
        value={searchValue}
        onChange={onSearchValueChange}
        />
        </div>
    ];
}

export { TodoSearch };