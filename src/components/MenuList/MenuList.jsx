import { useSelector } from "react-redux";
import MenuItem from "../MenuItem/MenuItem.jsx";
import { useHistory } from 'react-router-dom';

function MenuList() {
    const history = useHistory();
    const menuList = useSelector(store => store.menuList);
    const goToInfoForm = () => {
        console.log('go to /InfoForm')
        history.push('/InfoForm');
      };

    return  (
        <tbody>
            <tr>
            {menuList.map((item, index) =>  
               <MenuItem key={index} index={index} 
                item={item}/>
            )}
            </tr>
            <button onClick={goToInfoForm}>NEXT</button>
        </tbody>
    )
}

export default MenuList;