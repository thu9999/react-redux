import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ToastElement from '../toast/Toast';
import { FlashMessageState } from '../../redux/reducers/flash-message';
import Todo from '../todo/Todo';
import TodoService from './../../services/todo';
import { useHistory } from 'react-router-dom';
export interface TodoInterface {
    id: string 
    name: string 
    handleDelete(id: string): void
}

interface HomeProps {
    handleLogout(): void
}

const Home = (props: HomeProps) => {

    const { handleLogout } = props;

    const message = useSelector((state: FlashMessageState) => state.flashMessage.message);

    const [ todo, setTodo ] = useState<string>('');

    const [ todos, setTodos ] = useState<TodoInterface[]>([]);

    const getTodoList = () => {
        TodoService.getTodo().then(res => {
            const data = res.data.todos;
            setTodos(data);
        })
        .catch(err => {
            console.log(err)
        });
    }

    useEffect(() => {
        getTodoList();
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        TodoService.addTodo(todo).then(res => {
            // Clear todo form
            setTodo('');

            // Update new todo list
            getTodoList();
        })
        .catch(err => {
            console.log(err)
        })
    }

    const onDeleteTodo = (id: string) => {
        TodoService.deleteTodo(id).then(res => {
            // Update new todo list
            getTodoList();
        }).catch(err => {
            console.log(err)
        })
    };

    return (
        <div>
            {/**Toolbar */}
            <nav className='navbar navbar-light bg-light'>
                <a className='navbar-brand' href='#'>Home</a>
                <button type='button' className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </nav>

            {message && <ToastElement message={message} duration={2000} />}
            <h4>Todo list</h4>
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text' 
                        placeholder='Enter todo name' 
                        value={todo} 
                        onChange={(e) => {
                            const value = e.target.value;
                            setTodo(value);
                        }}  
                    />
                </form>
            </div>
            {todos.length ?  todos.map(todo => <Todo key={todo.id} id={todo.id} name={todo.name} handleDelete={onDeleteTodo} />) : <div>No data</div>}
        </div>
    )
}

export default Home;