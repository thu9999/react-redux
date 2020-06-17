import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './style.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
)