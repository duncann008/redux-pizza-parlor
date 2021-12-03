import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import MenuList from '../MenuList/MenuList';
import CheckOutPrice from '../CheckoutPrice/CheckOutPrice';
import InfoForm from '../InfoForm/InfoForm';
import CheckOutList from '../CheckOutList/CheckOutList';


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
      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <CheckOutPrice />
        <br />
      </header>
  
      {/* <img src='images/pizza_photo.png' /> */}
      <p>Pizza is great.</p>
      <table>
      <Route exact path="/">
        <MenuList />
      </Route>
      <Route exact path="/CheckOutList">
        <CheckOutList />
      </Route>
      </table>
      <Route exact path="/InfoForm">
        <InfoForm />
      </Route>
      
      

      </Router>
    </div>
  );
}

export default App;
