import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';



function CheckOut() {

    const [checkoutPrice, setCheckoutPrice] = useState(item.price);

    const checkoutList = useSelector((store) => store.checkoutList);

    const handleCheckout = () => {

    
    }
    
    const addCheckOutSum = () =>   {
            console.log(checkoutPrice);
            let number = Number(item.price);
            setCheckoutPrice(checkoutPrice + number);
            console.log(checkoutPrice);
            return checkoutPrice;
        
        
    }
    
  


return (
    
    <ul>
        <li>Total: ${addCheckOutSum()}</li>
    </ul>    
      
    


)
}
export default CheckOut;