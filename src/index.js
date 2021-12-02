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
const checkoutList = (state = [], action) => {
    if (action.type === 'ADD_ITEM') {
        console.log(action);
        let newState = [...state]
        newState.push(action.payload)
        return newState;
    }else if (action.type === 'CHECK_OUT_LIST') {
        console.log(action);
        return state;
    }else if (action.type === 'REMOVE_ITEM') {
        console.log(action);
        return action.payload;
    }
    return state;
}
    




const reduxStore = createStore(
    combineReducers({
        menuList,
        checkoutList
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
