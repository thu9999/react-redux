import React from 'react';
import './Todo.scss';

import { TodoInterface } from './../home/Home';

const Todo = (props: TodoInterface) => {

    const { id, name, handleDelete } = props;

    return (
        <div className='todo-container'>
            <div className='todo-name'>{name}</div>
            <div className='todo-actions'>
                <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;