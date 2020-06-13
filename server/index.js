import express from 'express';

import path from 'path';

const app = express();

app.use(express.static('dist'));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/dist/index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {

    if(err) throw err;

    console.log(`Server is running on port ${PORT}`);

})