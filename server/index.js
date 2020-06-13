import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.js';

const app = express();

//app.use(express.static('dist'));

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/client/index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {

    if(err) throw err;

    console.log(`Server is running on port ${PORT}`);

})