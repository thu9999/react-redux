import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import connectDB from './db/db.connection';
import cors from 'cors';
import users from './routes/users.js';
import todos from './routes/todos';

import passport from 'passport';

import dotenv from 'dotenv';
dotenv.config();
 
const app = express();

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));

// Parse JSON bodies
app.use(bodyParser.json());

// Accept request
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

// Set up cors to allow us to accept requests from client
app.use(cors({
    // Allow server to accept request from different origin
    origin: '*',
    methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
}));

// Connect mongoDB
connectDB();

/**
 * Passport middleware
 */
app.use(passport.initialize());
app.use(passport.session());

// User middleware
app.use('/api/users', users);

// Todo middleware
app.use('/api/todo', todos);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});