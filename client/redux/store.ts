import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];
const middleWareEnhancer = applyMiddleware(...middlewares);

const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
);

export default store;