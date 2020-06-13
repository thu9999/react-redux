import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './style.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = () => {}

const initialState: any = [];

const store = createStore(
    rootReducer, 
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)