import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const menuList = (state = [], action) =>    {
    if (action.type === 'GET_MENU') {
        console.log(action);
        return action.payload;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        menuList
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
