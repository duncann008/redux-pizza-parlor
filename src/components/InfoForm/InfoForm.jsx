import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function InfoForm({ addNewInfo }) {
    const history = useHistory();
    const goToCheckout = () => {
        console.log('go to /CheckOutList')
        history.push('/CheckOutList');
      };


  const dispatch = useDispatch();
  let [infoToAdd, setInfoToAdd] = useState({ name: '', price: 0 , city: '', zip: 0 });

  const handleNameChange = (event) => {
    setProductToAdd({
      ...infoToAdd,
      price: event.target.value,
    });
  }

  const handleAddressChange = (event) => {
    setInfoToAdd({
      ...infoToAdd,
      address: event.target.value,
    });
  }

  const handleCityChange = (event) => {
    setInfoToAdd({
      ...infoToAdd,
      city: event.target.value,
    });
  }

  const handleZipChange = (event) => {
    setInfoToAdd({
      ...infoToAdd,
      zip: event.target.value,
    });
  }

  const addInfo = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_NEW_PRODUCT',
      payload: infoToAdd
  })
  }
    


  return (
    <form onSubmit={(event) => addInfo(event)}>
      <input
        onChange={handleNameChange}
        type='text'
        placeholder='Name'
      />
    <br></br>
      <input
        onChange={handleAddressChange}
        type='text'
        placeholder='Street Address'
      />
      <br></br>
      <input
        onChange={handleCityChange}
        type='text'
        placeholder='City'
      />
    <br></br>
    <input
        onChange={handleZipChange}
        type='text'
        placeholder='Zip'
      />
    <br></br>
    <input type="radio" id="Pickup" name="order_type" value="Pickup"/>
    <label for="Pickup">Pickup</label><br></br>
    <input type="radio" id="Delivery" name="order_type" value="Delivery"/>
    <label for="Delivery">Delivery</label>
    <br></br>
    <button onClick={goToCheckout}>NEXT</button>

    </form>
  );
}

export default InfoForm;