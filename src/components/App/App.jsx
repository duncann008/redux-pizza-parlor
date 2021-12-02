import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MenuList from './MenuList/MenuList';
import CheckOut from '../Checkout/CheckOut';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    menuToReducer();
  }, []);

  const menuToReducer = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
      .then((res) => {
        dispatch({
          type: 'GET_MENU',
          payload: res.data
        })
      })
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <CheckOut/>
      </header>
  
      {/* <img src='images/pizza_photo.png' /> */}
      <p>Pizza is great.</p>
      <table>
      <MenuList />
      
      </table>
    </div>
  );
}

export default App;
