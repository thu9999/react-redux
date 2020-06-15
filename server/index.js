import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import router from './routes/users';

const app = express();

app.use(express.static('dist'));

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
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/api/users', router);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
    if(err) throw err;

    console.log(`Server is running on port ${PORT}`);

})