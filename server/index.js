import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import connectDB from './db/db.connection';

import users from './routes/users.js';
import todos from './routes/todos';

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

// Connect mongoDB
connectDB();

// User middleware
app.use('/api/users', users);

// Todo middleware
app.use('/api/todo', todos)

// Serve index.html file from dist folder
app.use(express.static('dist'));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});