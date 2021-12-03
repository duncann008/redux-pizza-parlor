import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function InfoForm() {
    

  

  const dispatch = useDispatch();

  let [infoToAdd, setInfoToAdd] = useState({ name: '', address: '' , city: '', zip: '', delivery: '' });

  const handleNameChange = (event) => {
    setInfoToAdd({
      ...infoToAdd,
      name: event.target.value,
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

  const handleDeliveryChange = (event) => {
    setInfoToAdd({
      ...infoToAdd,
      delivery: event.target.value,
    });
  }

  const history = useHistory();

  const addInfo = (event) => {
    event.preventDefault();
    console.log(infoToAdd);
    console.log('wbefwkgejrgeklrjge')
    dispatch({
      type: 'INFO_FORM',
      payload: infoToAdd
  })
    history.push('/CheckOutList');
  }

    

  return (
      <div>
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
    <input onChange={handleDeliveryChange} type="radio" id="Pickup" name="order_type" value="Pickup"/>
    <label for="Pickup">Pickup</label><br></br>
    <input onChange={handleDeliveryChange} type="radio" id="Delivery" name="order_type" value="Delivery"/>
    <label for="Delivery">Delivery</label>
    <br></br>
    <button>NEXT</button>

    </form>
    
    </div>
  );
}

export default InfoForm;