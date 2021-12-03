import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';



function CheckOut() {

    const checkoutList = useSelector((store) => store.checkoutList);

    const handleCheckout = () => {

    
    }
    console.log(checkoutList);
    
    const addCheckOutSum = () =>{
        let sum = 0;
        for (let item of checkoutList){
            sum += Number(item.price)
        }
        return sum;
    }



return (
    
    <ul>
        <li>Total: ${addCheckOutSum()}</li>
    </ul>    
      
    


)
}
export default CheckOut;