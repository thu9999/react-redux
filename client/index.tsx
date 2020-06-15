import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './style.scss';
import { Provider } from 'react-redux';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)