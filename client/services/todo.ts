import http from '../http-common';

const todoAPI = '/api/todo';

/**
 * Get todo list 
 */

const getTodo = () => {
    return http.get(todoAPI);
}

/**
 * Add todo
 */
const addTodo = (name: string) => {
    return http.post(todoAPI, {name});
}

/**
 * Delete a todo having id
 */
const deleteTodo = (id: string) => {
    return http.delete(`${todoAPI}/${id}`)
}

export default {
    getTodo,
    addTodo,
    deleteTodo
}


