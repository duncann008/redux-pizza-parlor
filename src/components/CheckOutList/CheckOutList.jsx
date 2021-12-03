import { useSelector } from "react-redux";
import MenuItem from "../MenuItem/MenuItem";
import { useHistory } from 'react-router-dom';


function CheckOutList() {

    const history = useHistory();
    const checkoutList = useSelector(store => store.checkoutList);
    // const goToInfoForm = () => {
    //     console.log('go to /InfoForm')
    //     history.push('/InfoForm');
    //   };

    





return  (
    <tbody>
            {checkoutList.map((item, index) => 
                <tr key={index}>
                    <td>{item.name}</td><td>{item.price}</td>
                </tr>
            )}
           
            
    </tbody>




)



}


export default CheckOutList;