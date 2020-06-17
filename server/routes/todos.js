import express from 'express';
import * as _ from 'lodash';
import Todos from '../db/todos.model';
import auth from './auth';

const todos = express.Router();

/**
 * Get todo list
 */
todos.get('/', auth, async (req, res) => {
    try {
        const todos = await Todos.find({ deleted: false });
        res.status(200).json({
            todos: todos
        });
        return false;
    } catch(error) {
        res.status(500).json({
            error: 'Something went wrong'
        });
    }
});

/**
 * Add a new todo
 */
todos.post('/', async(req, res) => {
    const name = req.body.name;
    try {
        const todo = new Todos({ name });
        const result = await todo.save();
        
        res.status(200).json({
            success: true
        });
        return false;
    } catch (err) {
        res.status(500).json({
            error: 'Something went wrong'
        });
        return false;
    }
});

/**
 * Delete a todo having id
 */
todos.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Todos.updateOne({ _id: id }, 
            { 
                $set: { 
                    deleted: true 
                }
            }
        );

        res.status(200).json({
            success: true
        });

        return false;
        
    } catch(err) {

        res.status(500).json({
            error: 'Something went wrong'
        });

        return false;
    }
})

export default todos;