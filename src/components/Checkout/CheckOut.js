import React from 'react';
import { useSelector } from 'react-redux';

function CheckOut() {

    const checkoutlist = useSelector((store) => store.checkoutList);

    const handleCheckout = () => {

    
}



return (
    
    <ul>
        {checkoutlist.map((item,i) => 
            <li key={i}>{item.name}{item.price}</li>
        )}
    </ul>    
      
    


)
}
export default CheckOut;